import React from "react";

function PortfolioCard(){
    return(
        <div id="cardId" className="col-8 col-sm-8 col-md-6 col-lg-4">
            <div className="card">
                <div className="card-header">
                More about my work
                </div>
                <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted card-info"><a id="gitLink" href="https://github.com/kulkdeepika" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i><span> GitHub</span></a></h6>
                <h6 className="card-subtitle mb-2 text-muted card-info"><a id="linkedInLink" href="https://www.linkedin.com/in/deepikaKulk" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i><span> LinkedIn</span></a></h6>
                <h6 className="card-subtitle mb-2 text-muted card-info"><a id="resumeLink" href="https://drive.google.com/file/d/1QvG9hkSVgF6vZl8VcojNWjUx5dGtXN4X/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i className="fas fa-file-pdf"></i><span> Resume</span></a></h6>
                </div>
            </div>
        </div>
    )
}

export default PortfolioCard;