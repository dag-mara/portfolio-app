import React, {useState} from "react";
import magicImage from './magic.svg';
import './style.css';

export const MagicWand = ({ onClick }) => {

    return (
        <div className="magicwand-wrapper">
            <img className="magic-image" src={magicImage} alt="change layout color" onClick = {onClick}/>
            <span className="info">change the layout color</span>
        </div>
        

    )
}