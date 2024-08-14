import { Link } from "react-router-dom"
import "./Navi.css"
import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"

const Navi = () => {
    const [click ,setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setcolor] = useState(false)
    const changecolor = () => {
        if(window.scrollY >=100){
            setcolor(true)
        }
        else{
            setcolor(false)
        }
    };

    window.addEventListener("scroll",changecolor)
  return (
    <div className={color ? "header header-bg" : "header"}>

        <Link to="/">
        <h1>Portfolio</h1>
        </Link>
        <ul className={click ?"navbar active" :"navbar"}>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/Project">Project</Link>
            </li>
            <li>
            <Link to="/About">About</Link>
            </li>
            <li>
            <Link to="/contant">Contant</Link>
            </li>  
        </ul>
        <div className="hamburger" onClick={handleClick }>
            {click ?(
                <FaBars  size={20} style={{color: "#ffff"}}/>):
                (<FaTimes  size={20} style={{color: "#ffff"}}/>)
            }
            
            
        </div>
    </div>
  )
}

export default Navi