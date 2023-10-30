import React from "react";
import magicImage from './magic.svg';
import './style.css';
import { useMagic } from "../../magic-context";

export const MagicWand = () => {

    const {color} = useMagic();
    const {handleColorChange} = useMagic();

	const handleClick = () => {
		handleColorChange(!color);
	}

    return (
        <div className="magicwand-wrapper" onClick = {handleClick}>
            <img className="magic-image" src={magicImage} alt="change the layout color" title="change the layout color"/>
        </div>
    )
}