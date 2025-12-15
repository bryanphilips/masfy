import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'

import { Home } from './views/Home'
import { About } from './views/About'
import { Services } from './views/Services'
import { BaseLayout } from './views/layouts/BaseLayout'
import { SliderLayout } from './views/layouts/SliderLayout'
import { Projects } from './views/Projects'
import { Category } from './views/Category'
import { Project } from './views/Project'
import { ContactSection } from './components/ContactSection'
import { ContactLayout } from './views/layouts/ContactLayout'

const app = new Hono()

app.use('/*', async (c, next) => {
  const ua = (c.req.header('user-agent') || '').toLowerCase()

  // Render / platform probes (covers most cases)
  const isProbe =
    ua.includes('render') ||
    ua.includes('health') ||
    ua.includes('kube-probe') ||
    c.req.method === 'HEAD'

  if (c.req.path === '/' && isProbe) {
    return c.html('ok')
  }

  return next()
})

// ✅ Health check (fast, no Airtable)
app.get('/healthz', (c) => c.text('ok'))

// ✅ Serve only static folders (prevents hijacking "/")
app.use('/css/*', serveStatic({ root: './static' }))
app.use('/js/*', serveStatic({ root: './static' }))
app.use('/images/*', serveStatic({ root: './static' }))
app.use('/fonts/*', serveStatic({ root: './static' })) // keep if you have fonts
app.use('/favicon.ico', serveStatic({ root: './static' })) // optional

//Cache
let homeCache: { html: string; ts: number } | null = null
const HOME_TTL_MS = 60_000
// Routes
app.get('/', async (c) => {
  const now = Date.now()

  if (homeCache && now - homeCache.ts < HOME_TTL_MS) {
    return c.html(homeCache.html)
  }

  const rendered = BaseLayout({ children: await Home() })
  homeCache = { html: rendered, ts: now }
  return c.html(rendered)
})
app.get('/about', (c) => c.html(SliderLayout({ children: About() })))
app.get('/services', (c) => c.html(BaseLayout({ children: Services() })))
app.get('/projects', (c) => c.html(BaseLayout({ children: Projects() })))
app.get('/projects/:slug', (c) => c.html(BaseLayout({ children: Project(c.req.param('slug')) })))
app.get('/category/:slug', (c) => c.html(BaseLayout({ children: Category(c.req.param('slug')) })))
app.get('/contact', (c) => c.html(ContactLayout({ children: ContactSection() })))

const port = Number(process.env.PORT) || 3000
console.log(`Listening on http://0.0.0.0:${port}`)

const server = Bun.serve({
  port,
  hostname: '0.0.0.0',
  fetch: app.fetch,
})

console.log('Server bound on port:', server.port)
