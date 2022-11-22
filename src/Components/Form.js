import './FormStyle.css'
import React from 'react'
import Button from './GlobalComponents/Button'

const Form = () => {
    return (
        <div className='form'>
            <form>
                <label>Your Name</label>
                <input type='text'></input>
                <label>Email</label>
                <input type='email'></input>
                <label>Subject</label>
                <input type='text'></input>
                <label>Message</label>
                <textarea rows='6' placeholder='Type your message' />
                <Button className='button' name='Submit' />
            </form>
        </div>
    )
}

export default Form