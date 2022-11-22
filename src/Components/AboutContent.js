import './AboutContentStyle.css'
import React from 'react'
import { Link } from 'react-router-dom'
import Button from './GlobalComponents/Button';
import React1 from '../assests/2.jpg'
import React2 from '../assests/1.jpg'

const AboutContent = () => {
    return (
        <div className='about'>
            <div className='left'>
                <h1>Who am I?</h1>
                <p>
                    I am new software developer. I create responsive secure websites for my clients.
                </p>
                <Link to='/contact'>
                    <Button className='button' name='Contact'></Button>
                </Link>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='top'>
                        <img src={React1} className='img' alt="true" />
                    </div>
                    <div className='bottom'>
                        <img src={React2} className='img' alt="true" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutContent