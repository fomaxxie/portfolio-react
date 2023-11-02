import React from "react";
import "./footer.css";
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return  (
    <div className="footer-container">
      <div className="footer-links">
        <a href="https://github.com/fomaxxie" className = "btn-footer" target= "_blank" rel='noreferrer' >
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/fomaxxie/" className = "btn-footer" target= "_blank" rel='noreferrer'>
          <BsLinkedin />
        </a>
        <a href="https://twitter.com/fomaxxie" className = "btn-footer" target= "_blank" rel='noreferrer'>
          <FaXTwitter />
        </a>
      </div>
      <p>© Max Fomkin. All rights reserved.</p>
    </div>

  )
}

export default Footer
