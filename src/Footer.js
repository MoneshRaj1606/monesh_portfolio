import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
import "./footer.css";
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
              <div className="location">
                <FaHome size={20} style={{ color:"#fff", marginRight: "2rem"  }} />

                <div>
                  <p>madiwala bengaluru</p>
                </div>
              </div>
              <div className="phone">
                <h4><FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                +91 9080442956</h4>
              </div>
              <div className="gmail">
                <h4>
                  <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                  moneshrajvk@gmail.com
                </h4>
              </div>
            
            </div>

            <div className="right">
              <h4>About me</h4>
              <p>I am a dedicated Java Full Stack Developer with expertise in Java, Advanced Java, Spring Boot framework, HTML, CSS, JavaScript, React, and MySQL. I've successfully completed several projects, demonstrating my ability to build robust and efficient web applications. I'm passionate about leveraging my skills to develop innovative solutions and am eager to grow and contribute to exciting projects in the tech industry.</p>
                <div>
                  <FaLinkedin size={30} style={{ color: "#fff" , marginRight:"1rem"}} />
                  <FaTwitter size={30} style={{ color: "#fff" , marginRight:"1rem"}} />
                  <FaGithub size={30} style={{ color: "#fff" , marginRight:"1rem"}} />
                </div>
            </div>

        </div>

    </div>
  )
}

export default Footer