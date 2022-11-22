import React from 'react'
import './HeroimgStyle.css';
import Introimg from '../assests/pf.jpeg';
import Button from './GlobalComponents/Button';
import { Link } from "react-router-dom";
const Heroimg = () => {
    return (
        <div className='hero'>
            <div className='mask'>
                <img className="into-img"
                    src={Introimg} alt="into-img" />
            </div>
            <div className='content'>
                <p>HI, I am a Software Engineer</p>
                <h1>Software Developer</h1>
                <div className='btn-div'>
                    <Link to="/project"><Button className="button" name="Project" /></Link>
                    <Link to="/contact"><Button className="btn" name="Contact" /></Link>
                </div>
            </div>
        </div>
    )
}

export default Heroimg