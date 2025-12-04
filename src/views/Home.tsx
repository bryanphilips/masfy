import { html } from "hono/html"
import fetchProjects from "../lib/fetchProjects"

export const Home = async () => {
    const projects = await fetchProjects()
    return html`
    <div class="section home-hero-3">
        <div class="carousel-container">
            <!-- Slide 1 - Add your image URL in the style attribute -->
            <div class="carousel-slide active" style="background-image: url('${process.env.NEXT_PUBLIC_APP_URL}/images/slide-1.jpeg');">
                <div class="carousel-overlay"></div>
                <div class="carousel-content">
                    <h1 class="hero-heading">Your Gateway to Engineering Excellence</h1>
                    <p class="hero-slide-text">From skyscrapers to smart infrastructure, Masfy Consultants helps developers, contractors, and homeowners turn vision into reality. Our solutions are safe, sustainable, and cost-efficient—delivered with precision, speed, and confidence.</p>
                    <div class="cta-buttons">
                        <button class="btn btn-primary"><a class="slide-link" href="/contact">Get Started</a></button>
                        <button class="btn btn-secondary"><a class="slide-link" href="/projects">View Projects</a></button>
                    </div>
                </div>
            </div>

            <!-- Slide 2 - Replace with your own image URL -->
            <div class="carousel-slide" style="background-image: url('${process.env.NEXT_PUBLIC_APP_URL}/images/slide-2.jpeg');">
                <div class="carousel-overlay"></div>
            </div>

            <!-- Slide 3 - Replace with your own image URL -->
            <div class="carousel-slide" style="background-image: url('${process.env.NEXT_PUBLIC_APP_URL}/images/slide-3.jpeg');">
                <div class="carousel-overlay"></div>
            </div>


            <!-- Slide 4 - Replace with your own image URL -->
            <div class="carousel-slide" style="background-image: url('${process.env.NEXT_PUBLIC_APP_URL}/images/slide-4.jpeg');">
                <div class="carousel-overlay"></div>
            </div>

            <!-- Slide 5 - Replace with your own image URL 
            <div class="carousel-slide" style="background-image: url('${process.env.NEXT_PUBLIC_APP_URL}/images/slide-6.jpeg');">
                <div class="carousel-overlay"></div>
            </div>
            -->

            <!-- Slide 6 - Replace with your own image URL -->
            <div class="carousel-slide" style="background-image: url('${process.env.NEXT_PUBLIC_APP_URL}/images/slide-7.jpeg');">
                <div class="carousel-overlay"></div>
            </div>

            <!-- Slide 7 - Replace with your own image URL -->
            <div class="carousel-slide" style="background-image: url('${process.env.NEXT_PUBLIC_APP_URL}/images/slide-8.jpeg');">
                <div class="carousel-overlay"></div>
            </div>

            <!-- Slide 8 - Replace with your own image URL -->
            <div class="carousel-slide" style="background-image: url('${process.env.NEXT_PUBLIC_APP_URL}/images/slide-9.jpeg');">
                <div class="carousel-overlay"></div>
            </div>

            <!-- Slide 9 - Replace with your own image URL -->
            <div class="carousel-slide" style="background-image: url('${process.env.NEXT_PUBLIC_APP_URL}/images/slide-10.jpeg');">
                <div class="carousel-overlay"></div>
            </div>

            <!-- Slide 10 - Replace with your own image URL -->
            <div class="carousel-slide" style="background-image: url('${process.env.NEXT_PUBLIC_APP_URL}/images/slide-11.jpeg');">
                <div class="carousel-overlay"></div>
            </div>

            <!-- Slide 11 - Replace with your own image URL -->
            <div class="carousel-slide" style="background-image: url('${process.env.NEXT_PUBLIC_APP_URL}/images/slide-12.jpg');">
                <div class="carousel-overlay"></div>
            </div>

            <div class="slide-info">
                <span id="currentSlide">01</span> / <span id="totalSlides">11</span>
            </div>

            <div class="carousel-indicators">
                <div class="indicator active" data-slide="0"></div>
                <div class="indicator" data-slide="1"></div>
                <div class="indicator" data-slide="2"></div>
                <div class="indicator" data-slide="3"></div>
                <!--<div class="indicator" data-slide="4"></div> -->
                <div class="indicator" data-slide="5"></div>
                <div class="indicator" data-slide="6"></div>
                <div class="indicator" data-slide="7"></div>
                <div class="indicator" data-slide="8"></div>
                <div class="indicator" data-slide="9"></div>
                <div class="indicator" data-slide="10"></div>
            </div>

            <div class="carousel-nav">
                <button class="nav-btn" id="prevBtn">←</button>
                <button class="nav-btn" id="nextBtn">→</button>
            </div>
        </div>
    </div>
    <div class="section services">
        <div class="container headline-container _3">
            <h2 class="bold rigidica services">
                <strong class="bold-text-12">Services</strong>
            </h2>
        </div>
        <div class="columns-2 _2 w-row">
            <div class="column-7 w-col w-col-4 w-col-stack">
                <a data-w-id="13608949-9ed8-c5a0-333e-ab14ff754961" href="/services" class="services-column bottom w-inline-block">
                    <div class="column">
                        <div>
                            <img src="https://cdn.prod.website-files.com/61ae6ef245cc43db8557b45c/61e7a348903c975c7d41ad1b_icons8-architecture%20(1).svg" loading="lazy" alt="" class="image-3 absolute"/>
                            <img src="/images/civil.png" loading="lazy" alt="" class="image-3"/>
                        </div>
                        <h5 class="heading-5">Civil Engineering Services</h5>
                        <p class="paragraph-3">We design the backbone of cities, towns, and rural communities with functionality, resilience, and longevity.</p>
                    </div>
                    <img src="https://cdn.prod.website-files.com/61ae6ef245cc43db8557b45c/622bb593666b5c5f0460f7fd_Layer.svg" loading="lazy" style="opacity:0" alt="" class="image-2"/>
                </a>
            </div>
            <div class="column-7 w-col w-col-4 w-col-stack">
                <a data-w-id="13608949-9ed8-c5a0-333e-ab14ff754969" href="/services" class="services-column bottom _2 w-inline-block">
                    <div class="column">
                        <div>
                            <img src="https://cdn.prod.website-files.com/61ae6ef245cc43db8557b45c/61e7a421ca7bfc0d6457e3f5_icons8-architecture%20(1)%20copy%206.svg" loading="lazy" alt="" class="image-3 absolute"/>
                            <img src="/images/structural.png" loading="lazy" alt="" class="image-3"/>
                        </div>
                        <h5 class="heading-5">Structural Engineering Services</h5>
                        <p class="paragraph-3">From the Ground Up—Engineered for Strength & Precision. Whether it’s a high-rise or heritage building, we design systems that last generations.</p>
                    </div>
                    <img src="https://cdn.prod.website-files.com/61ae6ef245cc43db8557b45c/622bb593666b5c5f0460f7fd_Layer.svg" loading="lazy" style="opacity:0" alt="" class="image-2"/>
                </a>
            </div>
            <div class="column-8 w-col w-col-4 w-col-stack">
                <a data-w-id="3952576d-a842-2733-0238-c92c033a56bd" href="/services" class="services-column bottom _2 w-inline-block">
                    <div class="column">
                        <div>
                            <img src="https://cdn.prod.website-files.com/61ae6ef245cc43db8557b45c/61e7a3e784878426eb4dc779_icons8-architecture%20(1)%20copy%205.svg" loading="lazy" alt="" class="image-3 absolute"/>
                            <img src="/images/auxiliary.png" loading="lazy" alt="" class="image-3"/>
                        </div>
                        <h5 class="heading-5">Auxiliary Services</h5>
                        <p class="paragraph-3">Deep Insights. Decisive Action.
                        <br />Specialized services providing data & diagnostics for smarter, safer construction.</p>
                    </div>
                    <img src="https://cdn.prod.website-files.com/61ae6ef245cc43db8557b45c/622bb593666b5c5f0460f7fd_Layer.svg" loading="lazy" style="opacity:0" alt="" class="image-2"/>
                </a>
            </div>
        </div>
        
        <div data-w-id="3052e4cb-4d4a-3511-ce1c-2078d9e9ddd2" class="container services-c padding-top">
            <a href="/services" class="w-inline-block">
                <div class="arrow-button">
                    <div class="text-block-7">View All Services</div>
                    <img src="https://cdn.prod.website-files.com/61ae6ef245cc43db8557b45c/61d8b6df705056211ff20e20_Arrow-Top-Green.png" alt="" class="arrow"/>
                </div>
            </a>
        </div>
    </div>
    <!-- <div class="section projects-section _1">
        <div class="container headline-container center">
            <h2 class="bold rigidica">
                <strong class="bold-text-11">Projects</strong>
            </h2>
            <p class="paragraph-4 projects">Masfy Consultants has played a crucial role in shaping Kenya’s premium property portfolio worth $100 Million. Our in-house structural engineering services integrate seamlessly into every project, ensuring superior design and delivery.</p>
        </div>
        <div data-w-id="ed698d5d-e003-3828-8979-80d16c2ca9eb" class="container all-projects">
            <div class="projects-collection-list-wrap w-dyn-list">
                <div role="list" class="projects-collection-list all-projects-list w-dyn-items">
                    ${
                        projects
                          ?.filter((project: any) => project.fields?.Featured === true)
                          ?.map((project: any, key: number) => {
                              // Get the cover image URL with fallback to a placeholder if not available
                              const coverImage = project.fields?.['Cover Image']?.[0];
                              const imageUrl = coverImage?.thumbnails?.large?.url || 
                                             coverImage?.url || 
                                             '/images/placeholder.svg';
                              
                              return html`
                              <div key=${key} role="listitem" class="w-dyn-item">
                                  <div data-w-id="ed698d5d-e003-3828-8979-80d16c2ca9ef" class="projects-collection-item all-projects-item">
                                      <a 
                                          data-w-id="ed698d5d-e003-3828-8979-80d16c2ca9f0" 
                                          style="-webkit-transform:translate3d(0, -50PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, -50PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, -50PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, -50PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" 
                                          href="/projects/${project.fields?.Slug || project.id}" 
                                          class="project-image-wrap w-inline-block"
                                      >
                                          <div style="width:100%;height:0%" class="project-image-mask">
                                              <img 
                                                  alt="${project.fields?.Name || 'Project Image'}" 
                                                  src="${imageUrl}" 
                                                  sizes="(max-width: 479px) 91vw, (max-width: 767px) 90vw, (max-width: 991px) 46vw, (max-width: 1919px) 44vw, 675px" 
                                                  class="image _500px-image"
                                                  loading="lazy"
                                              />
                                          </div>
                                          <div style="display:none;opacity:0" class="hover-mouse"></div>
                                      </a>
                                      <div class="column project-column _1">
                                          <h4 class="normal-project-name _1">${project.fields?.Name || 'Untitled Project'}</h4>
                                          <a href="/projects/${project.fields?.Slug || project.id}" class="link hide">View Project</a>
                                      </div>
                                  </div>
                              </div>
                              `;
                          })
                    }
                </div>
            </div>
        </div>
        <div data-w-id="479b067e-199e-e543-4160-e953871ea02e" class="container services-c padding-top-large">
            <a href="/projects" class="w-inline-block">
                <div class="arrow-button">
                    <div class="text-block-7">View All Projects</div>
                    <img src="${process.env.NEXT_PUBLIC_APP_URL}/images/arrow.png" alt="" class="arrow"/>
                </div>
            </a>
        </div>
    </div> -->
    <div class="section process-section">
        <div class="section-2 cc-no-padding-bottom">
            <div class="container-2 cc-flex-h">
                <div class="col-left">
                    <div class="learn_wrapper _3">
                        <h3 class="heading-14">
                            <strong class="bold-text-13">Our approach</strong>
                        </h3>
                        <div class="text_left">At Masfy Consultants, we don’t just design structures—we shape East Africa’s skyline. Since 2012, we’ve partnered with visionary developers to deliver over $100 million worth of projects across Kenya. From commercial towers to eco-conscious residential builds, we provide confidence, clarity, and complete engineering solutions.</div>
                        <a href="/projects" class="process w-inline-block">
                            <div class="arrow-button">
                                <div class="text-block-7">View our projects</div>
                                <img src="${process.env.NEXT_PUBLIC_APP_URL}/images/arrow.png" alt="" class="arrow"/>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-right">
                    <div data-w-id="46b3ac12-00ff-b0b0-9dd5-c908aa5e12ed" class="block-wrapper">
                        <div tabindex="0" class="block _1">
                            <div class="div-block-7">
                                <div class="block-title">01</div>
                                <h4 class="heading-4">
                                    <strong>Precision That Saves Time & Money</strong>
                                </h4>
                                <div class="block-text">Our engineers use cutting-edge tools—Revit, SAP 2000, Civil 3D, Infraworks 360, 3DS Max, Robot Structural Analysis—to design with accuracy, speed, and cost-efficiency. Every detail is tested and optimized before a single brick is laid.</div>
                            </div>
                        </div>
                        <div tabindex="0" class="block _2">
                            <div class="div-block-7">
                                <div class="block-title">02</div>
                                <h4 class="heading-4">
                                    <strong>Design That’s Future-Ready</strong>
                                </h4>
                                <div class="block-text">We integrate BIM (Building Information Modeling) from the start, enabling real-time collaboration, faster approvals, and reduced risk. Clients enjoy total control and clarity at every stage.</div>
                            </div>
                        </div>
                        <div tabindex="0" class="block _3">
                            <div class="div-block-7">
                                <div class="block-title">03</div>
                                <h4 class="heading-4">
                                    <strong>Sustainability Without Compromise</strong>
                                </h4>
                                <div class="block-text">We prioritize green technologies, low-impact materials, and sustainable practices to protect the environment and future-proof investments.</div>
                            </div>
                        </div>
                        <div tabindex="0" class="block _4">
                            <div class="div-block-7">
                                <div class="block-title">04</div>
                                <h4 class="heading-4">
                                    <strong>Engineering Excellence. Delivered.</strong>
                                </h4>
                                <div class="block-text">Whether you’re a developer, architect, or contractor, partnering with Masfy means building smarter, stronger, and with purpose.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="section testimonials gray-bg">
        <div class="container testimonial-container">
            <h2 class="max-700 white">
                <strong class="bold-text-14">We &#x27;re proud of our work</strong>
            </h2>
            <div class="_60px-spacer"></div>
            <div class="w-dyn-list">
                <div role="list" class="testimonial-list w-dyn-items">
                    <div data-w-id="413ff4c6-7e55-f3b7-884e-ed49c334736f" role="listitem" class="testimonial-item w-dyn-item">
                        <div class="testimonial-row">
                            <div id="w-node-_413ff4c6-7e55-f3b7-884e-ed49c3347371-c3347366" class="testimonial-content green">
                                <blockquote class="block-quote">Masfy delivered our project ahead of schedule with flawless precision. Their engineering expertise gave us complete confidence throughout.</blockquote>
                            </div>
                        </div>
                    </div>
                    <div data-w-id="413ff4c6-7e55-f3b7-884e-ed49c334736f" role="listitem" class="testimonial-item w-dyn-item">
                        <div class="testimonial-row">
                            <div id="w-node-_413ff4c6-7e55-f3b7-884e-ed49c3347371-c3347366" class="testimonial-content green">
                                <blockquote class="block-quote">Masfy combines innovation with integrity. They consistently deliver high-quality results that exceed expectations.</blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
}
