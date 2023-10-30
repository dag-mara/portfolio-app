import React from "react";
import projectsDesign from '../../projects-design-database';
import { Project } from "../Project";
import './style.css';
import { useMagic } from "../../magic-context";


export const ProjectsDesign = () => {
    const {magicColorHeadline} = useMagic();
    
    return(
    <div className="project-list-design-wrapper">
        <h2 style={{ color: magicColorHeadline() }}>PROJECTS | web design</h2>
        <div className="project-list-dev">
            {projectsDesign.map((project) => {
                return (
                    <Project project={project} key={project.id} />
                )
            })}
        </div>
    </div>
    )
}