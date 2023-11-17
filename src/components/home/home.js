import React from "react";
import "./home.css"
import HomeContacts from './HomeContacts'
import HomePhoto from "../../assets/max-photo.png"

const Home = () => {
  return  (
    <section id="home">
      <div className = "inner-container">
        <div className = "blurry-gradient-green"></div>
        <div className = "blurry-gradient-blue"></div>
        <div className = "home-intro">
          <h3>Hi there! I am Max Fomkin</h3>
          <h2> {">"} Full-stack developer </h2>
          <h3>Let's build something cool!</h3>
          <a href='#contact'className="btn" id="btn-action">Get in touch</a>
        </div>
        <div className = "home-photo">
          <img src = {HomePhoto} alt = ""/>
        </div>
        <HomeContacts />
      </div>
    </section>
  )
}

export default Home
