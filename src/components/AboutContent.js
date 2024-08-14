import { Link } from "react-router-dom"
import "./aboutcontent.css"
import React from 'react'
import img1 from "../assests/fullstack1.png"
import img2 from "../assests/fullstcak2.jpg"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">

            <h1>WHO AM I?</h1>
            <p>I am a Full Stack Developer skilled in Java, Spring Boot, React, and MySQL. I specialize in both front-end and back-end development, delivering complete solutions from design to deployment.</p>
        <Link to="/Contant">
            <button className="button">Contact</button>
        </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={img1} className="img" alt="true" />
                </div>
                <div className="img-stack bottom">
                <img src={img2} className="img" alt="true" />
                </div>
            </div>
        </div>

    </div>
    
  )
}

export default AboutContent