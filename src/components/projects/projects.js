import React from "react";
import "./projects.css";
import IMG1_1 from "../../assets/projects/midpoint-1.png";
import IMG1_2 from "../../assets/projects/midpoint-2.png";
import IMG1_3 from "../../assets/projects/midpoint-3.png";
import IMG2_1 from "../../assets/projects/spaces-1.png";
import IMG3_1 from "../../assets/projects/prcrft.png";
import SwiperProjects from "./swiper";

const data = [
  {
    id: 1,
    images: [IMG1_1, IMG1_2, IMG1_3],
    title: "Midpoint",
    github: "https://github.com/fomaxxie/midpoint",
    link: "https://www.midpoint.world/",
  },
  {
    id: 2,
    images: [IMG2_1, IMG1_2, IMG1_3],
    title: "Spaces",
    github: "https://github.com/fomaxxie/spaces",
    link: "https://spaces-dgraham09-0d4ed9f6ae40.herokuapp.com/",
  },
  {
    id: 3,
    images: [IMG3_1, IMG1_2, IMG1_3],
    title: "Pristine Crafts (ecom store)",
    github: " link",
    link: "link",
  },
]

function Projects() {
  return  (
    <section id="projects">
      <div className = "projects-container">
        <h2 style={{textAlign: "center"}}>Projects</h2>
        <div className = "projects-cards">
          {data.map(({id, images, title, github, link}) => {
            return (
              <article key={id} >
                <div className = "project-card">
                  <SwiperProjects images={images} />
                  <div className = "project-description">
                    <h3>{title}</h3>
                    <div className="project-cta">
                      <a href={github} className="btn" target="_blank" rel='noreferrer'>
                        View Code
                      </a>
                      <a href={link} className="btn" target="_blank" rel='noreferrer'>
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>

  );
}

export default Projects
