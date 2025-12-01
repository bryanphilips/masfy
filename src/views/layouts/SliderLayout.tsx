import { html } from "hono/html"
import { Footer } from "../../components/Footer"
import { ContactSection } from "../../components/ContactSection"
import { Navigation } from "../../components/Navigation"

export const SliderLayout = ({ children }: { children: any }) => {
    return html`
    <!DOCTYPE html>
    <html data-wf-domain="www.whitneyperryid.com" data-wf-page="63e9323160afc2e87badcba7" data-wf-site="61ae6ef245cc43db8557b45c">
        <head>
            <meta charset="utf-8"/>
            <title>About Us | Masfy</title>
            <meta content="From skyscrapers to smart infrastructure, Masfy Consultants helps developers, contractors, and homeowners turn vision into reality." name="description"/>
            <meta content="About Us | Masfy" property="og:title"/>
            <meta content="From skyscrapers to smart infrastructure, Masfy Consultants helps developers, contractors, and homeowners turn vision into reality." property="og:description"/>
            <meta content="${process.env.NEXT_PUBLIC_APP_URL}/images/masfy-seo.png" property="og:image"/>
            <meta content="About Us | Masfy" property="twitter:title"/>
            <meta content="From skyscrapers to smart infrastructure, Masfy Consultants helps developers, contractors, and homeowners turn vision into reality." property="twitter:description"/>
            <meta content="${process.env.NEXT_PUBLIC_APP_URL}/images/masfy-seo.png" property="twitter:image"/>
            <meta property="og:type" content="website"/>
            <meta content="summary_large_image" name="twitter:card"/>
            <meta content="width=device-width, initial-scale=1" name="viewport"/>
            <link href="${process.env.NEXT_PUBLIC_APP_URL}/css/styles.css" rel="stylesheet" type="text/css"/>
            <link href="https://fonts.googleapis.com" rel="preconnect"/>
            <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin="anonymous"/>
            <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript"></script>
            <script type="text/javascript">
                WebFont.load({
                    google: {
                        families: ["Raleway:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic", "Spartan:100,200,300,regular,500,600,700,800,900", "Darker Grotesque:300,regular,500,600,700,800,900"]
                    }
                });
            </script>
            <script type="text/javascript">
                !function(o, c) {
                    var n = c.documentElement
                    , t = " w-mod-";
                    n.className += t + "js",
                    ("ontouchstart"in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch")
                }(window, document);
            </script>
            <link href="${process.env.NEXT_PUBLIC_APP_URL}/images/favicon.png" rel="shortcut icon" type="image/x-icon"/>
            <link href="${process.env.NEXT_PUBLIC_APP_URL}/images/apple-touch-icon.png" rel="apple-touch-icon"/>
            <script async="" src="https://www.googletagmanager.com/gtag/js?id=UA-223709110-1"></script>
            <script type="text/javascript">
                window.dataLayer = window.dataLayer || [];
                function gtag() {
                    dataLayer.push(arguments);
                }
                gtag('js', new Date());
                gtag('config', 'UA-223709110-1', {
                    'anonymize_ip': false
                });
            </script>
            <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/@splidejs/splide@3.2.2/dist/css/splide-core.min.css">
            <style>
                .splide__track {
                    overflow: visible;
                }
            </style>
        </head>
        <body>
            <div class="page-background"></div>
            <div style="opacity:0" class="page-wrap">
                ${<Navigation />}
                ${children}
                ${<ContactSection />}
                ${<Footer />}
            </div>
            <script src="${process.env.NEXT_PUBLIC_APP_URL}/js/jquery-3.5.1.min.js" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
            <script src="${process.env.NEXT_PUBLIC_APP_URL}/js/main.js" type="text/javascript"></script>
            <script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@3.2.2/dist/js/splide.min.js"></script>
            <script>

                var splide = new Splide('.splide');
                var bar = splide.root.querySelector('.my-slider-progress-bar');

                // Update the bar width:
                splide.on('mounted move', function() {
                    var end = splide.Components.Controller.getEnd() + 1;
                    bar.style.width = String(100 * (splide.index + 1) / end) + '%';
                });

                splide.mount();

                function slider() {

                    let splides = $('.slider');
                    for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
                        new Splide(splides[i],{
                            // Desktop on down
                            perPage: 2.5,
                            perMove: 1,
                            focus: 0,
                            // 0 = left and 'center' = center
                            type: 'slide',
                            // 'loop' or 'slide'
                            gap: '40px',
                            // space between slides
                            arrows: false,
                            // 'slider' or false
                            pagination: false,
                            // 'slider' or false
                            speed: 600,
                            // transition speed in miliseconds
                            dragAngleThreshold: 30,
                            // default is 30
                            autoWidth: false,
                            // for cards with differing widths
                            rewind: false,
                            // go back to beginning when reach end
                            rewindSpeed: 400,
                            waitForTransition: false,
                            updateOnMove: true,
                            trimSpace: false,
                            // true removes empty space from end of list
                            breakpoints: {
                                991: {
                                    // Tablet
                                    perPage: 1.5,
                                    gap: '72px',
                                },
                                767: {
                                    // Mobile Landscape
                                    perPage: 1.2,
                                    gap: '20px',
                                },
                                479: {
                                    // Mobile Portrait
                                    perPage: 1.2,
                                    gap: '20px',
                                }
                            }
                        }).mount();
                    }

                }
                slider();
            </script>
        </body>
    </html>
    `
}
    