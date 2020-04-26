import React from "react";
import PortfolioCard from "../components/PortfolioCard";
import NavbarOthers from "../components/NavbarOthers";
import ProjectCard from "../components/ProjectCard";
import projects from "../utils/projects.json";

function Portfolio(){
    return(
        <>
        <div className="container">
            <NavbarOthers></NavbarOthers>
            <div className="main-content shadow">
                <div className="row">
                    <div className="col-sm-12">
                        <h3>Portfolio</h3>
                        <hr></hr>
                    </div>
                </div>
        
                <div className="row">
                <PortfolioCard></PortfolioCard>
                {
                    projects.map((project, index) => (
                        <ProjectCard 
                            index={index} 
                            name={project.name}
                            imageLink={project.imageLink}
                            deployLink={project.deployLink}
                            repoLink={project.repoLink}
                            key={project.id}
                        ></ProjectCard>
                    ))
                }
                </div>
        
            </div>
        </div>
        <div className="push"></div>
        </>
    );
}

export default Portfolio;