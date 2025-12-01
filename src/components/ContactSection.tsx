import { html } from "hono/html";

export const ContactSection = () => html`
<div class="section contact">
    <div data-w-id="112cb757-dd50-cc08-b256-c2dd9d545435" class="container footer-cta-container">
        <div class="footer-image-wrap">
            <div class="footer-image-mask"></div>
        </div>
        <div id="w-node-_112cb757-dd50-cc08-b256-c2dd9d545450-9d545434" class="footer-form-block w-form">
            <form id="wf-form-Contact-Form" name="wf-form-Contact-Form" data-name="Contact Form" method="get" class="footer-form">
                <h2 class="no-margin contact">
                    <strong class="bold-text-15">Contact</strong>
                </h2>
                <p id="w-node-d7539429-afa4-19a6-19e8-1e516425aa8e-9d545434" class="big-paragraph no-margin">We love what we do! Allow us to help transform your dreams into reality.</p>
                <input class="text-field w-input" maxlength="256" name="First-Name" data-name="First Name" placeholder="First Name" type="text" id="First-Name" required=""/>
                <input class="text-field w-input" maxlength="256" name="Last-Name" data-name="Last Name" placeholder="Last Name" type="text" id="Last-Name" required=""/>
                <input class="text-field w-node-_112cb757-dd50-cc08-b256-c2dd9d545454-9d545434 w-input" maxlength="256" name="Email-Address" data-name="Email Address" placeholder="Email Address" type="email" id="Email-Address" required=""/>
                <input class="text-field w-node-_112cb757-dd50-cc08-b256-c2dd9d545455-9d545434 w-input" maxlength="256" name="Phone-Number" data-name="Phone Number" placeholder="Phone Number" type="tel" id="Phone-Number" required=""/>
                <textarea placeholder="Message" maxlength="5000" id="Message-2" name="Message" data-name="Message" class="text-area w-node-_112cb757-dd50-cc08-b256-c2dd9d545456-9d545434 w-input"></textarea>
                <input type="submit" data-wait="Please wait..." id="w-node-_112cb757-dd50-cc08-b256-c2dd9d545457-9d545434" class="button w-button" value="Get in touch"/>
            </form>
            <div class="form-sucess w-form-done">
                <div class="form-success-content">
                    <h4>Thank you!</h4>
                    <p class="no-margin">Someone from our team will be in touch soon.</p>
                </div>
            </div>
            <div class="error-message w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
            </div>
        </div>
        <div id="w-node-_112cb757-dd50-cc08-b256-c2dd9d54543f-9d545434" class="footer-details">
            <div class="label">location</div>
            <a href="#" class="contact-links _4 w-inline-block">
                <p class="no-margin"> The Cresent Pearl, 1st Floor, Cresent Road, Westlands</p>
            </a>
            <div class="label">Email</div>
            <a href="mailto:manza@masfyconsultants.com" class="contact-links w-inline-block">
                <p class="no-margin">manza@masfyconsultants.com</p>
            </a>
            <div class="label">Phone</div>
            <a href="tel:+254726365516" class="contact-links w-inline-block">
                <p class="no-margin">+254 726 365 516</p>
            </a>
            <div class="label">Socials</div>
            <div style="display: flex; gap: 1rem;" id="w-node-_4b0a8e23-e757-e4ac-a9be-4f524797ea72-9d545434">
                <a id="w-node-_7ec8d98e-db76-aa4d-1719-834a09d63fe1-9d545434" href="https://web.facebook.com/photo?fbid=1353909253409033&set=pcb.1353916130075012" target="_blank" class="contact-links social w-inline-block">
                    <img src="/images/facebook.png" loading="lazy" alt="" class="image-4"/>
                </a>
                <a id="w-node-_7ec8d98e-db76-aa4d-1719-834a09d63fe1-9d545434" href="https://www.instagram.com/masfy_consultants/" target="_blank" class="contact-links social w-inline-block">
                    <img src="/images/instagram.png" loading="lazy" alt="" class="image-4"/>
                </a>
                <a id="w-node-_7ec8d98e-db76-aa4d-1719-834a09d63fe1-9d545434" href="#" target="_blank" class="contact-links social w-inline-block">
                    <img src="/images/twitter.png" loading="lazy" alt="" class="image-4"/>
                </a>
                <a id="w-node-_7ec8d98e-db76-aa4d-1719-834a09d63fe1-9d545434" href="https://www.linkedin.com/company/108871497/admin/dashboard/" target="_blank" class="contact-links social w-inline-block">
                    <img src="/images/linkedIn.png" loading="lazy" alt="" class="image-4"/>
                </a>
                <a id="w-node-_7ec8d98e-db76-aa4d-1719-834a09d63fe1-9d545434" href="#" target="_blank" class="contact-links social w-inline-block">
                    <img src="/images/youtube.png" loading="lazy" alt="" class="image-4"/>
                </a>
            </div>
        </div>
    </div>
</div>
`