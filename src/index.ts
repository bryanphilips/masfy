import { Hono } from 'hono'
import { serve, serveStatic } from 'hono/bun'
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

const port = Number(process.env.PORT) || 3000
const app = new Hono()

app.use('/*', serveStatic({ root: './static' }))

app.get('/', (c) => c.html(BaseLayout({ children: Home() })))
app.get('/about', (c) => c.html(SliderLayout({ children: About() })))
app.get('/services', (c) => c.html(BaseLayout({ children: Services() })))
app.get('/projects', (c) => c.html(BaseLayout({ children: Projects() })))
app.get('/projects/:slug', (c) =>
  c.html(BaseLayout({ children: Project(c.req.param('slug')) }))
)
app.get('/category/:slug', (c) =>
  c.html(BaseLayout({ children: Category(c.req.param('slug')) }))
)
app.get('/contact', (c) => c.html(ContactLayout({ children: ContactSection() })))

//console.log(`Listening on http://0.0.0.0:${port}`)

serve({
  fetch: app.fetch,
  port,
  hostname: '0.0.0.0',
})
