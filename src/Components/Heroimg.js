import React from 'react'
import './HeroimgStyle.css';
import Introimg from '../assests/BackGround2.jpg';
import Button from './GlobalComponents/Button';
import { Link } from "react-router-dom";
const Heroimg = () => {
    return (
        <div className='hero'>
           <div className='left'>
                <h1>Digital designer</h1>
                <h2>crafting product that People love</h2>
                <p>lorem32 and this taht what a re aldsj fa lfdjasl fjalssdfhjfsda fds
                    afsjlsf 
                </p>
                <button className='button-49' type="">Check Out</button>
           </div>
           <div className='right'>
                <img src={Introimg}/>
           </div>
        </div>
    )
}

export default Heroimg