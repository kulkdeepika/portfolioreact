import React from "react";


function ProjectCard(props){
    return(
        <div className="col-sm-12 col-md-6 col-lg-4">
            <div id="portfolio-img-container">
                <img id={"img1"} src={require(`../utils/images/Image${props.index+1}.jpg`)}  alt="screenshot"></img>
                <a className="overlayText" href={props.deployLink} target="_blank" rel='noreferrer noopener'>
                    {props.name}
                </a>
            </div>
            <a className="repoLink" href={props.repoLink} target="_blank" rel='noreferrer noopener'>Repository</a>
        </div>
    )
}

export default ProjectCard;

//{require(props.imageLink)}
//`../utils/images/Image${props.index+1}.jpg`