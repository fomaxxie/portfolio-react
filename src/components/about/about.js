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
        <h2>About Me</h2>
        <div>
          <p>A couple of years now I have been looking to change my career
            and follow my passion in tech. This started out by teaching myself
            Python which was shortly followed by PostgreSQL. At my previous job
            I was excited to be able to utilize my abilities for the first time,
            soon I was building complex queries that finally allowed the company
            to visualize their data. That was it, I was hooked. After that I saw
            that I wanted to pursue this path full time. A couple of months later
            I enrolled in the 10 week full-stack developer bootcamp from Le Wagon.
            There I learned a plethora of languages and tools including HTML, CSS,
            JavaScript ES6, Ruby & Ruby on Rails (including the MVC-Framework),
            SQL, git & GitHub, Heroku and much more.</p>
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
