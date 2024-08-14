import React from 'react'
import "./workcardstyle.css"
import { NavLink } from 'react-router-dom';

const Workcard = (props) => {
  return (
    <div className='project-card'>
      <img src={props.imgsrc} alt="image" />
      <h2 className='project-title'>{props.title}</h2>
      <div className='pro-details'>
        <p>{props.text}</p>
        <div className='pro-btns'>
          <NavLink to={props.views} className="button">VIEW</NavLink>
          <NavLink to="url.com" className="button">SOURCE</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Workcard