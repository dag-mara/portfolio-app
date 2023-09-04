import React from "react";
import Slider from "react-slick";
import { Project } from "../Project";
import projectsDevCoop  from '../../projects-dev-coop-database';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css';

export const ProjectsDevCoop = () => {
    const settings = {
        dots: true, // Display navigation dots
        infinite: true, // Loop the carousel
        speed: 500, // Transition speed in milliseconds
        slidesToShow: 4, // Number of slides to show at a time
        slidesToScroll: 1, // Number of slides to scroll per change
        autoplay: true, // Enable autoplay
        autoplaySpeed: 4000,
        responsive: [
            {
              breakpoint: 1024, // Tablet breakpoint
              settings: {
                slidesToShow: 3, 
              },
            },
            {
              breakpoint: 768, // Mobile breakpoint
              settings: {
                slidesToShow: 2, 
              },
            },
          ],
      };
    
      return (
        <div className="project-list-dev-coop-wrapper">
            <h2>PROJECTS - web development | cooperation</h2>
            <Slider {...settings}>
                {projectsDevCoop.map((project) => {
                    return ( 
                        <Project project={project} key={project.id} slider="true"/>             
                    )
                })}
            </Slider>
        </div>       
      );
    };


















/* import React from "react";
import projectsDevCoop  from '../../projects-dev-coop-database';
import { Project } from "../Project";
import './style.css';


export const ProjectsDevCoop = () => (
    <div className="project-list-dev-coop-wrapper">
        <h2>PROJECTS - web development | cooperation</h2>
        <div className="project-list-dev">
            {projectsDevCoop.map((project) => {
                return ( 
                    <Project project={project} key={project.id} />             
                )
            })}
        </div>
    </div>
) */