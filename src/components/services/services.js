import React from "react";
import "./services.css"

const Services = () => {
  return  (
    <section id="services">
      <div className = "services-container">
        <h2 style={{textAlign: "center"}}>Services</h2>
        <div className = "services-card">
          <h3>Web Development</h3>
          <li>Build responsive and modern websites</li>
          <li>Develop interactive web applications</li>
          <li>Integrate with back-end services</li>
          <li>Optimize for performance and SEO</li>
          <li>Implement secure authentication and authorization</li>
          <li>Provide ongoing maintenance and support</li>
        </div>
        <div className = "services-card">
          <h3>UI / UX Design</h3>
          <li>Provide basic design concepts</li>
          <li>Create wireframes and prototypes</li>
          <li>Design user-friendly interfaces</li>
          <li>Ensure consistent and intuitive user experiences</li>
          <li>Conduct user research and usability testing</li>
        </div>
        <div className = "services-card">
          <h3>Advertising</h3>
          <li>Create engaging and SEO-friendly blog posts</li>
          <li>Develop multimedia content</li>
          <li>Build social media campaigns on Facebook</li>
          <li>Craft email marketing campaigns</li>
        </div>
      </div>
    </section>
  )
}

export default Services
