import './FooterStyle.css'
import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaHome size={20} style={
                            { color: 'white', marginRight: '2rem' }
                        } />
                        <div>
                            <p>123 Housing Society Bageshwar</p>
                            <p>Uttrakhand India</p>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4><FaPhone size={20} style={
                            { color: 'white', marginRight: '2rem' }
                        } />

                            123234563342</h4>


                    </div>
                    <div className='email'>
                        <h4><FaMailBulk size={20} style={
                            { color: 'white', marginRight: '2rem' }
                        } />

                            hello@gmail.com</h4>

                    </div>
                </div>
                <div className='right'>
                    <h4>About me</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse perferendis ratione namquibusdam delectus ut temporibus impedit velit aliquid!</p>
                    <div className='social'>
                        <FaFacebook size={20} style={
                            { color: 'white', marginRight: '2rem' }
                        } />
                        <FaTwitter size={20} style={
                            { color: 'white', marginRight: '2rem' }
                        } />
                        <FaLinkedin size={20} style={
                            { color: 'white', marginRight: '2rem' }
                        } />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer