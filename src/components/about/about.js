import React from "react";
import "./about.css";
import {AiFillHtml5} from "react-icons/ai"
import {DiRubyRough} from "react-icons/di"
import {BiLogoCss3} from "react-icons/bi"
import {BsFillBootstrapFill} from "react-icons/bs"
import {BiLogoJavascript} from "react-icons/bi"
import {SiRubyonrails} from "react-icons/si"
import {BiLogoReact} from "react-icons/bi"
import {BiLogoNodejs} from "react-icons/bi"
import {BiLogoShopify} from "react-icons/bi"
import {AiFillFacebook} from "react-icons/ai"
import {BiLogoTiktok} from "react-icons/bi"
import {BsFillDatabaseFill} from "react-icons/bs"
import {BsFillClipboardDataFill} from "react-icons/bs"
import {BiTestTube} from "react-icons/bi"


const About = () => {
  return  (
    <section id="about">
      <div className = "about-container">
        <h2 style={{textAlign: "center"}}>About Me</h2>
        <div style={{margin: "3rem 0"}}>
          <p style={{textAlign: "center"}}>
          Passionate web developer with a unique background in engineering and
          entrepreneurship. With experiences ranging from managing contracts within complex industrial
          construction projects to successfully running e-commerce ventures, I approach every new
          endeavor with an innovative mindset, eagerly embracing challenges and utilizing a blend
          of analytical thinking and creative problem-solving to drive impactful solutions.
          </p>
          <p style={{textAlign: "center"}}>
          Committed to making a tangible positive impact, I am driven to provide
          digital experiences that are not just functional, but also transformative
          for your business.
          </p>
        </div>
        <div className = "about-cards">
          <div className = "about-card">
            <h3>Frontend Skills</h3>
            <li><AiFillHtml5 /> HTML5</li>
            <li><BiLogoCss3 /> CSS / SCSS</li>
            <li><BsFillBootstrapFill /> Bootstrap</li>
            <li><BiLogoJavascript /> JavaScript</li>
            <li><BiLogoReact /> React JS</li>

          </div>
          <div className = "about-card">
            <h3>Backend Skills</h3>
            <li><DiRubyRough /> Ruby</li>
            <li><SiRubyonrails /> Ruby on Rails</li>
            <li><BsFillDatabaseFill /> SQL / PostgreSQL</li>
            <li><BiLogoNodejs /> Node JS (in progress)</li>

          </div>
          <div className = "about-card">
            <h3>E-Commerce Skills</h3>
            <li><BiLogoShopify /> Shopify store development</li>
            <li><AiFillFacebook /> Facebook Ads</li>
            <li><BiLogoTiktok /> TikTok Ads</li>
            <li><BsFillClipboardDataFill /> Data Analytics</li>
            <li><BiTestTube /> Product Testing</li>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
