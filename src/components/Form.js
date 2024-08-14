import React from 'react'
import "./formstyle.css"

const Form = () => {
  return (
    <div className='form'>
        <form action="">
            <label>Your Name</label>
            <input type="text" />
            <label>Email</label>
            <input type="text" />
            <label>Subject</label>
            <input type="text" />
            <label>Message</label>
            <textarea rows={6} placeholder='Type Your Message here '></textarea>
            <button className='button'>Submit</button>

        </form>

    </div>
  )
}

export default Form