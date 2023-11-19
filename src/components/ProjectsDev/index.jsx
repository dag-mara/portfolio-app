import React from "react";
import projectsDev from '../../projects-dev-database';
import { Project } from "../Project";
import './style.css';
import { useMagic } from "../../magic-context";


export const ProjectsDev = () => {
    const {magicColorText} = useMagic();

    return(
        <div className="project-list-dev-wrapper" id="projects">
            <h2 style={{ color: magicColorText() }}>PROJECTS | web development</h2>
            <div className="project-list-dev">
                {projectsDev.map((project) => {
                    return (
                        <Project project={project} key={project.id} />
                    )
                })}
            </div>
        </div>
    )
}