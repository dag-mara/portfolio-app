import React from "react";
import magicImage from './magic.svg';
import './style.css';

export const MagicWand = ({ onClick }) => {

    return (
        <div className="magicwand-wrapper" onClick = {onClick}>
            <img className="magic-image" src={magicImage} alt="change the layout color" title="change the layout color"/>
        </div>
    )
}