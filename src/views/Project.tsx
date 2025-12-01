import { html } from "hono/html"
import fetchExpandedProject from "../lib/fetchExpandedProject";

export const Project = async (slug: string) => {
    const project: any = await fetchExpandedProject({ project: slug })
    const coverImage = project.fields?.['Cover Image']?.[0];
    const imageUrl = coverImage?.url || '/images/placeholder.svg';

    return html`
    <div class="section hero-2">
        <div class="container flex-c">
            <h1 class="heading-11">${project.fields.Name}</h1>
            <div style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); opacity: 1; transform-style: preserve-3d;" class="f-image-wrap">
                <div style="height: 100%; width: 100%;" class="f-image-mask">
                    <img alt="" src="${imageUrl}" sizes="95vw" class="image f-image">
                </div>
            </div>
            <a style="opacity:0" href="/projects" class="link back-link">Back</a>
        </div>
    </div>
    <div class="section">
        <div data-w-id="b17d6519-21e2-fe59-481f-c6b4e8f95227" class="container project-description">
            <div id="w-node-_54a516f9-411f-9ff7-7ffc-5b17ed1efaf9-68adcbb1" class="sticky-labels what-we-did-label"></div>
            <div id="w-node-bb49e81d-591b-b0ee-55cb-04dee874a025-68adcbb1" class="project-info">
                <div class="label">Location</div>
                <p class="paragraph-10">${project.fields.Location}</p>
                <div class="label">Complete</div>
                <p class="paragraph-10">${project.fields.Complete}</p>
                <div class="label">Objective</div>
                <p class="paragraph-10">${project.fields.Objectives}</p>
                <div class="label">COntractor</div>
                <p class="paragraph-10">${project.fields.Contractor}</p>
                <div class="label">Services</div>
                <div class="w-dyn-list">
                    <div role="list" class="project-categories w-dyn-items">
                    ${
                        project?.fields?.Services?.map((service: any, key: any) => {
                            return html`
                            <div role="listitem" class="collection-item w-dyn-item">
                                <a href="/services" class="project-categories-link no-box">${service?.fields?.Name || 'Untitled Service'}</a>
                            </div>`
                        })
                    }
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="project-desc-wrap w-richtext">
                    <h3>Project Overview</h3>
                    <p>${project.fields.Description}</p>
                </div>
            </div>
        </div>
    </div>
    <div class="section gallery-section">
        <div class="container center">
            <h2 class="heading-12">
                <strong>Gallery</strong>
            </h2>
            <div class="project-images-list-wrapper w-dyn-list">
                <script type="text/x-wf-template" id="wf-template-6850b418-9ec9-9a2c-a98e-9a776f1b8a76">
                    %3Cdiv%20data-w-id%3D%226850b418-9ec9-9a2c-a98e-9a776f1b8a77%22%20style%3D%22-webkit-transform%3Atranslate3d(0%2C%20100PX%2C%200)%20scale3d(1%2C%201%2C%201)%20rotateX(0)%20rotateY(0)%20rotateZ(0)%20skew(0%2C%200)%3B-moz-transform%3Atranslate3d(0%2C%20100PX%2C%200)%20scale3d(1%2C%201%2C%201)%20rotateX(0)%20rotateY(0)%20rotateZ(0)%20skew(0%2C%200)%3B-ms-transform%3Atranslate3d(0%2C%20100PX%2C%200)%20scale3d(1%2C%201%2C%201)%20rotateX(0)%20rotateY(0)%20rotateZ(0)%20skew(0%2C%200)%3Btransform%3Atranslate3d(0%2C%20100PX%2C%200)%20scale3d(1%2C%201%2C%201)%20rotateX(0)%20rotateY(0)%20rotateZ(0)%20skew(0%2C%200)%3Bopacity%3A0%22%20role%3D%22listitem%22%20class%3D%22w-dyn-item%20w-dyn-repeater-item%22%3E%3Ca%20href%3D%22%23%22%20data-w-id%3D%223994face-2345-e8d6-66a7-6f2a9362a16b%22%20class%3D%22project-lightbox%20w-inline-block%20w-lightbox%22%3E%3Cimg%20alt%3D%22%22%20src%3D%22https%3A%2F%2Fcdn.prod.website-files.com%2F61ae6ef245cc43e96b57b461%2F622be44d8b4a1d32e81f0d77_BLUFFVIEW%2520REMODEL%25205.JPG%22%20sizes%3D%22(max-width%3A%20479px)%2095vw%2C%20(max-width%3A%20767px)%2046vw%2C%20(max-width%3A%20991px)%2045vw%2C%2046vw%22%20srcset%3D%22https%3A%2F%2Fcdn.prod.website-files.com%2F61ae6ef245cc43e96b57b461%2F622be44d8b4a1d32e81f0d77_BLUFFVIEW%2520REMODEL%25205-p-1080.jpeg%201080w%2C%20https%3A%2F%2Fcdn.prod.website-files.com%2F61ae6ef245cc43e96b57b461%2F622be44d8b4a1d32e81f0d77_BLUFFVIEW%2520REMODEL%25205-p-1600.jpeg%201600w%2C%20https%3A%2F%2Fcdn.prod.website-files.com%2F61ae6ef245cc43e96b57b461%2F622be44d8b4a1d32e81f0d77_BLUFFVIEW%2520REMODEL%25205-p-2000.jpeg%202000w%2C%20https%3A%2F%2Fcdn.prod.website-files.com%2F61ae6ef245cc43e96b57b461%2F622be44d8b4a1d32e81f0d77_BLUFFVIEW%2520REMODEL%25205-p-2600.jpeg%202600w%2C%20https%3A%2F%2Fcdn.prod.website-files.com%2F61ae6ef245cc43e96b57b461%2F622be44d8b4a1d32e81f0d77_BLUFFVIEW%2520REMODEL%25205-p-3200.jpeg%203200w%2C%20https%3A%2F%2Fcdn.prod.website-files.com%2F61ae6ef245cc43e96b57b461%2F622be44d8b4a1d32e81f0d77_BLUFFVIEW%2520REMODEL%25205.JPG%205760w%22%20class%3D%22project-image%22%2F%3E%3Cdiv%20style%3D%22-webkit-transform%3Atranslate3d(0%2C%2050PX%2C%200)%20scale3d(1%2C%201%2C%201)%20rotateX(0)%20rotateY(0)%20rotateZ(0)%20skew(0%2C%200)%3B-moz-transform%3Atranslate3d(0%2C%2050PX%2C%200)%20scale3d(1%2C%201%2C%201)%20rotateX(0)%20rotateY(0)%20rotateZ(0)%20skew(0%2C%200)%3B-ms-transform%3Atranslate3d(0%2C%2050PX%2C%200)%20scale3d(1%2C%201%2C%201)%20rotateX(0)%20rotateY(0)%20rotateZ(0)%20skew(0%2C%200)%3Btransform%3Atranslate3d(0%2C%2050PX%2C%200)%20scale3d(1%2C%201%2C%201)%20rotateX(0)%20rotateY(0)%20rotateZ(0)%20skew(0%2C%200)%3Bdisplay%3Anone%3Bopacity%3A0%22%20class%3D%22hover-mouse%20mouse-2%22%3E%3C%2Fdiv%3E%3Cscript%20type%3D%22application%2Fjson%22%20class%3D%22w-json%22%3E%7B%0A%20%20%22items%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22url%22%3A%20%22https%3A%2F%2Fcdn.prod.website-files.com%2F61ae6ef245cc43e96b57b461%2F622be44d8b4a1d32e81f0d77_BLUFFVIEW%2520REMODEL%25205.JPG%22%2C%0A%20%20%20%20%20%20%22type%22%3A%20%22image%22%0A%20%20%20%20%7D%0A%20%20%5D%2C%0A%20%20%22group%22%3A%20%22Gallery%22%0A%7D%3C%2Fscript%3E%3C%2Fa%3E%3C%2Fdiv%3E
                </script>
                <div role="list" class="project-images-list w-dyn-items">
                ${
                    project?.fields?.Gallery?.map((image: any, key: any) => {
                        return html`
                        <div role="listitem" class="w-dyn-item w-dyn-repeater-item" style="opacity: 1; transform: none;">
                            <a href="#" class="project-lightbox w-inline-block w-lightbox">
                                <img alt="" src="${image?.url || '/images/placeholder.svg'}" class="project-image" style="width: 100%; height: auto; display: block;"/>
                                <div style="-webkit-transform:translate3d(0, 50PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 50PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 50PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 50PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);display:none;opacity:0" class="hover-mouse mouse-2"></div>
                                <script type="application/json" class="w-json">
                                    {
                                        "items": [
                                            {
                                                "url": "${image?.url || '/images/placeholder.svg'}",
                                                "type": "image"
                                            }
                                        ],
                                        "group": "Gallery"
                                    }</script>
                            </a>
                        </div>
                        `
                    })
                }
                </div>
                <div class="w-dyn-hide w-dyn-empty">
                    <div>No items found.</div>
                </div>
            </div>
        </div>
    </div>
    `
}
    