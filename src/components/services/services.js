import React from "react";
import "./services.css";
import {IoIosArrowForward} from "react-icons/io";

const Services = () => {
  return  (
    <section id="services">
      <div className = "services-container">
        <h2 style={{textAlign: "center"}}>What I can do for you</h2>
        <div className = "services-cards">
          <div className = "services-card">
            <div className = "services-card-head">
              <h3>Web Development</h3>
            </div>
            <div className = "services-li">
              <li><IoIosArrowForward /> Build responsive and modern websites</li>
              <li><IoIosArrowForward /> Develop interactive web applications</li>
              <li><IoIosArrowForward /> Integrate with back-end services</li>
              <li><IoIosArrowForward /> Optimize for performance and SEO</li>
              <li><IoIosArrowForward /> Implement secure authentication and authorization</li>
              <li><IoIosArrowForward /> Provide ongoing maintenance and support</li>
            </div>
          </div>
          <div className = "services-card">
            <div className = "services-card-head">
              <h3>UI / UX Design</h3>
            </div>
            <div className = "services-li">
              <li><IoIosArrowForward /> Provide basic design concepts</li>
              <li><IoIosArrowForward /> Create wireframes and prototypes</li>
              <li><IoIosArrowForward /> Design user-friendly interfaces</li>
              <li><IoIosArrowForward /> Ensure consistent and intuitive user experiences</li>
              <li><IoIosArrowForward /> Conduct user research and usability testing</li>
            </div>
          </div>
          <div className = "services-card">
            <div className = "services-card-head">
              <h3>Advertising</h3>
            </div>
            <div className = "services-li">
              <li><IoIosArrowForward /> Create engaging and SEO-friendly blog posts</li>
              <li><IoIosArrowForward /> Develop multimedia content</li>
              <li><IoIosArrowForward /> Build social media campaigns on Facebook</li>
              <li><IoIosArrowForward /> Craft email marketing campaigns</li>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
