import { html } from "hono/html"
import fetchProjects from "../lib/fetchProjects";
import fetchCategories from "../lib/fetchCategories";

export const Category = async (slug: string) => {
    const projects = await fetchProjects({ category: slug });
    const categories = await fetchCategories()
    return html`
    <div class="section hero-section">
        <div class="container _100px-margin">
            <h1 class="hero-text page-title">
                <strong class="bold-text-16">${categories?.find((category: any) => category.fields?.Slug === slug)?.fields?.Name || 'Untitled Category'}</strong>
            </h1>
            <div class="sideflex categories">
                <a href="/projects" aria-current="page" class="project-categories-link w-inline-block">
                    <div class="text-block-4">All</div>
                </a>
                <div class="w-dyn-list">
                    <div role="list" class="project-categories _2 w-dyn-items">
                    ${categories?.map((category: any, key: any) => {
                        return html`
                        <div key=${key} role="listitem" class="w-dyn-item">
                            <a href="/category/${category.fields?.Slug || category.id}" class="project-categories-link w-inline-block ${category.fields?.Slug === slug ? 'w--current' : ''}">
                                <div class="text-block-3">${category.fields?.Name || 'Untitled Category'}</div>
                            </a>
                        </div>`
                    })}
                    </div>
                </div>
            </div>
        </div>
        <div data-w-id="208d2855-8ea4-ce38-d32f-9798468fa81e" class="container all-projects">
            <div class="projects-collection-list-wrap w-dyn-list">
                <div role="list" class="projects-collection-list all-projects-list w-dyn-items">
                    ${
                        projects
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
    </div>
    `
}