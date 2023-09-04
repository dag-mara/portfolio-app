import React from "react";
import './style.css';

export const Button = ({link, title, }) => {
    return( 
    <a className="button" href={link}>
        {title}
    </a>
    )
}