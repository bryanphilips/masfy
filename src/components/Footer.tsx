import { html } from "hono/html";

export const Footer = () => html`
    <div class="section footer-section">
        <div class="container footer-container-1">
            <div class="sideflex">
                <a href="/" aria-current="page" class="w-inline-block w--current">
                    <img src="${process.env.NEXT_PUBLIC_APP_URL}/images/logo-dark.svg" loading="lazy" alt="" class="image-7"/>
                </a>
            </div>
            <div id="w-node-_1d98b5ec-cfd6-faae-14b8-e4f6abec8a50-abec8a45" class="column">
                <a href="/" aria-current="page" class="footer-link w--current">Home</a>
                <a href="/about" class="footer-link">About</a>
                <a href="/projects" class="footer-link">Projects</a>
                <a href="/services" class="footer-link">Services</a>
                <a href="/contact" class="footer-link last">Contact</a>
            </div>
        </div>
        <div class="container footer-container-2">
            <div class="text-block-9">© 2025 Masfy Consulting Engineers. All Rights Reserved.</div>
            <div id="w-node-_1d98b5ec-cfd6-faae-14b8-e4f6abec8a68-abec8a45" class="sideflex">
                <a href="https://www.loft.ug" target="_blank" class="footer-link-small side-link-right">Powered by <strong>Loft</strong></a>
            </div>
        </div>
    </div>
`