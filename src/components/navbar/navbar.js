import React from 'react';
import "./navbar.css";
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai";
import {BiBook} from "react-icons/bi";
import {RiServiceLine} from "react-icons/ri";
import {BiMessageSquareDetail} from "react-icons/bi";
import {useState} from "react";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      <a href='#top' onClick={() => setActiveNav('#')}
      className={activeNav === '#' ? 'active' : ''}>
        <AiOutlineHome />
      </a>

      <a href='#about' onClick={() => setActiveNav('#about')}
      className={activeNav === '#' ? 'active' : ''}>
        <AiOutlineUser />
      </a>

      <a href='#services' onClick={() => setActiveNav('#services')}
      className={activeNav === '#' ? 'active' : ''}>
        <RiServiceLine />
      </a>

      <a href='#projects' onClick={() => setActiveNav('#projects')}
      className={activeNav === '#' ? 'active' : ''}>
        <BiBook />
      </a>

      <a href='#contact' onClick={() => setActiveNav('#contact')}
      className={activeNav === '#' ? 'active' : ''}>
        <BiMessageSquareDetail />
      </a>
    </nav>
  )
}

export default Navbar
