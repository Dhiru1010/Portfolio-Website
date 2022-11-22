import { React } from 'react'
import "./ButtonStyle.css";
function Button(props) {
    return (
        <button className={props.className}>{props.name}</button>
    )
}

export default Button