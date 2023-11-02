import React from "react";
import "./projects.css";
import IMG1 from "../../assets/projects/midpoint-1.png";
import IMG2 from "../../assets/projects/spaces-1.png";

const data = [
  {
    id: 1,
    img: IMG1,
    title: "Midpoint",
    github: "https://github.com/fomaxxie/midpoint",
    link: "https://www.midpoint.world/",
  },
  {
    id: 2,
    img: IMG2,
    title: "Spaces",
    github: "https://github.com/fomaxxie/spaces",
    link: "https://spaces-dgraham09-0d4ed9f6ae40.herokuapp.com/",
  },
  {
    id: 3,
    img: IMG1,
    title: "Shopify",
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
          {data.map(({id, img, title, github, link}) => {
            return (
              <article key={id} >
                <div className = "project-card">
                  <img src={img} alt = {title} />
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
