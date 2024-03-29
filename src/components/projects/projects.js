import React from "react";
import "./projects.css";
import IMG1_1 from "../../assets/projects/midpoint-1.png";
import IMG1_2 from "../../assets/projects/midpoint-2.png";
import IMG1_3 from "../../assets/projects/midpoint-3.png";
import IMG2_1 from "../../assets/projects/spaces-1.png";
import IMG2_2 from "../../assets/projects/spaces-2.png";
import IMG2_3 from "../../assets/projects/spaces-3.png";
import IMG3_1 from "../../assets/projects/prcrft.png";
import IMG3_2 from "../../assets/projects/prcrft-2.png";
import IMG3_3 from "../../assets/projects/prcrft-3.png";
import IMG4_1 from "../../assets/projects/aiapp-1.png";
import IMG4_2 from "../../assets/projects/aiapp-2.png";
import IMG4_3 from "../../assets/projects/aiapp-3.png";
import SwipeProjects from "./SwipeProjects";

const data = [
  {
    id: 1,
    imgs: [IMG1_1, IMG1_2, IMG1_3],
    title: "Midpoint",
    github: "https://github.com/fomaxxie/midpoint",
    link: "https://www.midpoint.world/",
  },
  {
    id: 4,
    imgs: [IMG4_1, IMG4_2, IMG4_3],
    title: "AiApply",
    github: "https://github.com/fomaxxie/ai_apply",
    link: "https://www.aiapply.xyz/",
  },
  {
    id: 3,
    imgs: [IMG3_1, IMG3_2, IMG3_3],
    title: "Pristine Crafts (ecom store)",
    github: "",
    link: "",
  },
  {
    id: 2,
    imgs: [IMG2_1, IMG2_2, IMG2_3],
    title: "Spaces",
    github: "https://github.com/fomaxxie/spaces",
    link: "",
  },
]

function Projects() {
  return  (
    <section id="projects">
      <div className = "projects-container">
        <h2 style={{textAlign: "center"}}>What I have built</h2>
        <div className = "projects-cards">
          {data.map(({id, imgs, title, github, link}) => {
            return (
              <article key={id} >
                <div className = "project-card">
                  <SwipeProjects imgs={imgs}/>
                  <div className = "project-description">
                    <h3>{title}</h3>
                    <div className="project-cta">
                      <a href={github} className="btn" target="_blank" rel='noreferrer'>
                        See Code
                      </a>
                      <a href={link} className="btn" target="_blank" rel='noreferrer'>
                        See Project
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
