import React from "react";
import ModalImage from "react-modal-image";
import './style.css';
import arrowIcon from './arrow-right.svg';

export const Project = ({ project, slider }) => {
    let image;
    if (slider) {
        image = <img className="project-image" src={project.image} alt={project.title} />;
    } else {
        image = <ModalImage
        small={project.imageSmall}
        large={project.image}
        alt={project.title}
        hideZoom = "true"
        hideDownload = "true"
        />;
    }

    return (
        <div className="project">
            {image}
            <h3>{project.title}</h3>
            <div className="project-link">
                <img src={arrowIcon} alt="link" />
                <a href={project.href} target="_blank">{project.href}</a>
            </div>

        </div>

    )
}



    ;