import './WorkCardStyle.css'
import { NavLink } from 'react-router-dom';
import React from 'react'
import Button from './GlobalComponents/Button';
const WorkCard = (props) => {
    return (
        <div className='project-card'>
            <img src={props.imgsrc} alt="img" />
            <h2 className='project-title'>{props.title}</h2>
            <div className='pro-detail'>
                <div>
                    <p>
                        {props.text}
                    </p>
                </div>

                <div className='pro-btn'>
                    <NavLink to={props.view}>
                        <Button className='button' name='View'></Button>
                    </NavLink>
                    <NavLink to={props.view}>
                        <Button className='button' name='Source'></Button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default WorkCard