import React from 'react';
import "./home.css";
import {BsLinkedin} from "react-icons/bs";
import {FaGithub} from "react-icons/fa";
import {BsEnvelopeAtFill} from "react-icons/bs";
import { FaXTwitter } from 'react-icons/fa6';

function HomeContacts() {
  return (
    <div className="home-contacts">
      <a href="https://github.com/fomaxxie" className = "btn-home" target= "_blank" rel='noreferrer' >
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/fomaxxie/" className = "btn-home" target= "_blank" rel='noreferrer'>
        <BsLinkedin />
      </a>
      <a href="https://twitter.com/fomaxxie" className = "btn-home" target= "_blank" rel='noreferrer'>
        <FaXTwitter />
      </a>
      <a href="mailto:fomaxxi@gmail.com" className = "btn-home" target= "_blank" rel='noreferrer'>
        <BsEnvelopeAtFill />
      </a>
    </div>
  )
}

export default HomeContacts
