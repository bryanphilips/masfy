import { html } from "hono/html";

export const Navigation = () => {
    return html`
    <div data-animation="default" class="navbar w-nav" data-easing2="ease" data-easing="ease" data-collapse="all" role="banner" data-no-scroll="1" data-duration="0" data-doc-height="1">
        <div class="container nav-container">
            <div class="menu-left">
                <a href="/" aria-current="page" class="brand w-nav-brand w--current">
                    <img style="width: 230px; margin-top: -45px; height: auto;" src="${process.env.NEXT_PUBLIC_APP_URL}/images/masfy-new-logo.svg" alt="" class="brand-image"/>
                </a>
                <div class="featured-links">
                    <a href="/about" class="nav-link w-inline-block">
                        <div>About</div>
                        <div class="nav-link-line">
                            <div class="nav-link-line-fill"></div>
                        </div>
                    </a>
                    <a href="/projects" class="nav-link w-inline-block">
                        <div>Projects</div>
                        <div class="nav-link-line">
                            <div class="nav-link-line-fill"></div>
                        </div>
                    </a>
                    <a href="/services" class="nav-link w-inline-block">
                        <div>Services</div>
                        <div class="nav-link-line">
                            <div class="nav-link-line-fill"></div>
                        </div>
                    </a>
                    <a href="/contact" class="nav-link w-inline-block">
                        <div>Contact</div>
                        <div class="nav-link-line">
                            <div class="nav-link-line-fill"></div>
                        </div>
                    </a>
                </div>
            </div>
            <nav role="navigation" class="nav-menu w-nav-menu">
                <div class="container nav-inner-container">
                    <div class="nav-details">
                        <div id="w-node-_5a0fdfe0-e7e1-c518-9017-39c9faaa28e7-b5bd5cd5" class="label">Address</div>
                        <a href="#" class="contact-links w-inline-block">
                            <p class="no-margin">
                                1234 Street Rd.<br/>Dallas, Texas 75001
                            </p>
                        </a>
                        <div id="w-node-_5a0fdfe0-e7e1-c518-9017-39c9faaa28ef-b5bd5cd5" class="label">Email</div>
                        <a href="#" class="contact-links w-inline-block">
                            <p class="no-margin">design@whitneyperryid.com</p>
                        </a>
                        <div id="w-node-_5a0fdfe0-e7e1-c518-9017-39c9faaa28f3-b5bd5cd5" class="label">Phone</div>
                        <a href="#" class="contact-links w-inline-block">
                            <p class="no-margin">(214) 329 - 9585</p>
                        </a>
                    </div>
                    <div id="w-node-_05d4ef4b-8c95-36fb-72b8-2b0223117daf-b5bd5cd5" class="column nav-column">
                        <a data-w-id="756334c3-b1a8-da51-b948-3d81558d02ec" href="/" aria-current="page" class="nav-menu-links w-inline-block w--current">
                            <div class="nav-boxes">
                                <div class="cross cross-2"></div>
                                <div class="cross cross-1"></div>
                            </div>
                            <h4 class="no-margin">
                                <strong class="menu">Home</strong>
                            </h4>
                        </a>
                        <a data-w-id="328a35fe-0097-2dbe-b150-a3d33e51b5fb" href="/about" class="nav-menu-links w-inline-block">
                            <div class="nav-boxes">
                                <div class="cross cross-2"></div>
                                <div class="cross cross-1"></div>
                            </div>
                            <h4 class="no-margin">
                                <strong class="menu">About</strong>
                            </h4>
                        </a>
                        <a data-w-id="8ab5b2a1-d042-4c67-7106-0de3edb5da0f" href="/projects" class="nav-menu-links w-inline-block">
                            <div class="nav-boxes">
                                <div class="cross cross-2"></div>
                                <div class="cross cross-1"></div>
                            </div>
                            <h4 class="no-margin">
                                <strong class="menu">Projects</strong>
                            </h4>
                        </a>
                        <a data-w-id="c8b36c24-607f-c90b-b1b4-c139e36da9c4" href="/services" class="nav-menu-links w-inline-block">
                            <div class="nav-boxes">
                                <div class="cross cross-2"></div>
                                <div class="cross cross-1"></div>
                            </div>
                            <h4 class="no-margin">
                                <strong class="menu">Services</strong>
                            </h4>
                        </a>
                        <a data-w-id="8a9e49ec-cccd-b8bf-c140-58b3c184288b" href="/contact" class="nav-menu-links w-inline-block">
                            <div class="nav-boxes">
                                <div class="cross cross-2"></div>
                                <div class="cross cross-1"></div>
                            </div>
                            <h4 class="no-margin">
                                <strong class="menu">Contact</strong>
                            </h4>
                        </a>
                    </div>
                    <div id="w-node-fb1e7939-48ef-9580-4774-fd13e7e2a232-b5bd5cd5" class="column nav-column-2">
                        <a href="#" class="nav-link hide w-inline-block">
                            <div>Process</div>
                            <div class="nav-link-line">
                                <div class="nav-link-line-fill"></div>
                            </div>
                        </a>
                        <a href="#" class="nav-link hide w-inline-block">
                            <div>Testimonials</div>
                            <div class="nav-link-line">
                                <div class="nav-link-line-fill"></div>
                            </div>
                        </a>
                        <a href="#" class="nav-link hide w-inline-block">
                            <div>Before and after</div>
                            <div class="nav-link-line">
                                <div class="nav-link-line-fill"></div>
                            </div>
                        </a>
                        <a href="#" class="nav-link hide w-inline-block">
                            <div>Jobs</div>
                            <div class="nav-link-line">
                                <div class="nav-link-line-fill"></div>
                            </div>
                        </a>
                    </div>
                </div>
            </nav>
            <div data-w-id="edd194f5-6de6-b0fa-7090-49ecb5bd5ce7" class="menu-button w-nav-button">
                <div class="open-menu">Menu</div>
                <div class="close-menu">Close</div>
                <div class="nav-link-line">
                    <div class="nav-link-line-fill"></div>
                </div>
            </div>
        </div>
    </div>
`}
