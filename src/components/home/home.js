import React from "react";
import "./home.css"
import HomePhoto from "../../assets/max-photo.png"

const Home = () => {
  return  (
    <div className = "inner-container">
      <div className = "blurry-gradient-green"></div>
      <div className = "blurry-gradient-blue"></div>
      <div className = "home-intro">
        <h3>Hi there! I am</h3>
        <h1>Max Fomkin</h1>
        <h2> {">"} Full-stack developer </h2>
        <h3>Let's build something cool!</h3>
      </div>
      <div className = "home-photo">
        <img src = {HomePhoto} alt = ""/>
      </div>
  </div>

  )
}

export default Home
