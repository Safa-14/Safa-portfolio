import React, { useEffect } from 'react'
import "./projects.css";
import mixitup from "mixitup";
import ProjectCard from "../projectCard/ProjectCard";

import projects from "../../data";

function Projects() {

    // Just use an useEffect hook like that
    useEffect(() => {
        mixitup(".projects_container", {
            selectors: {
                target: ".project_card",
            },
            animation: {
                duration: 500,
            },
        });
    }, []);


    const handleClick = (event) => {
        document.querySelectorAll(".project_item").forEach((l) => {
            l.classList.remove("active-project");
        });
        event.currentTarget.classList.add("active-project");
    };

    return (
        <section className='projects' id='projects'>
            <h5>My Projects</h5>
            <div className="project_filters">
                <span
                    className="project_item active-project"
                    onClick={handleClick}
                    data-filter="all"
                >
                    All
                </span>
                <span
                    className="project_item "
                    onClick={handleClick}
                    data-filter=".front"
                >
                    Frontend App
                </span>
                <span
                    className="project_item"
                    onClick={handleClick}
                    data-filter=".back"
                >
                    Backend App
                </span>
            </div>

            <div className="projects_container">
                {projects.map((project, index) => {
                    return (

                        <div
                            className={
                                "project_card mix " +
                                (project.role === "frontend" ? "front" : "back")
                            }
                            key={index}
                        >
                            <ProjectCard {...project} />

                        </div>
                    );
                })}
            </div>
        </section>
    )
}

export default Projects
