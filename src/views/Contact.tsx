import { html } from "hono/html"
import { ContactSection } from "../components/ContactSection"

export const Contact = () => {
    return html`
    <div class="section hero-section">
        <div class="container _100px-margin">
            <h1 class="hero-text page-title">
                <strong class="bold-text-16">Contact Us</strong>
            </h1>
        </div>
    </div>
    ${<ContactSection />}
    `
}