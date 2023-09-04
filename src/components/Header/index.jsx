import React, {useState} from "react";
import { Menu } from "../Menu";
import './style.css';
import arrowImage from './arrow-down.svg';

export const Header = ({onMagicClick}) => {
    

    return(
        <div className="header">
            <Menu onMagicClick={onMagicClick}/>
            <div className="header-text">
                <h1>web development</h1>
                <h2>Dagmar Suchá</h2>
            </div>
        
            <a href="#projects">
                <img className="arrow-down" src={arrowImage} alt="move to projects" />
            </a>
        </div> 
    )
 }