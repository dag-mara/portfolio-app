import React from "react";
import projectsDev from '../../projects-dev-database';
import { Project } from "../Project";
import './style.css';


export const ProjectsDev = () => (
    <div className="project-list-dev-wrapper" id="projects">
        <h2>PROJECTS - web development</h2>
        <div className="project-list-dev">
            {projectsDev.map((project) => {
                return ( 
                    <Project project={project} key={project.id} />             
                )
            })}
        </div>
    </div>
)