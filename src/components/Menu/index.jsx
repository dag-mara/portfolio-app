import React from "react";
import { Button } from "../Button";
import { MagicWand } from "../MagicWand";
import './style.css';

export const Menu = ({onMagicClick}) => {

    return(
        <div className="menu">
            <MagicWand onClick={onMagicClick}/>
            <div className="menu-right">
                <Button title="projects" link="#projects"/>
                <Button title="contact" link="#contact"/>
            </div>
        </div>
    )
}