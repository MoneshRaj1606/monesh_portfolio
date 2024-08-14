import "./heroimage.css";
import React from 'react'
import IntroImg from "../assests/intro-bg.jpg"
import { Link } from "react-router-dom";

const HeroImage = () => {
  return (
    <div className="hero">
      <div className="mask">
      <img className="intro_img" src={IntroImg} alt="introimg" />
      </div>
      <div className="content">
        <p>HI,I'm Monesh Raj</p>
        <h1>Java Fullstack Developer.</h1>
        <div>
        <Link to="/Project" className="button">Project</Link>
        <Link to="/Contant" className="button-light">Contant</Link>
      </div>
      </div>
      
    </div>
  )
}

export default HeroImage