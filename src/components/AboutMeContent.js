import React from "react";

function AboutMeContent(){
    return(
        <div className="main-content shadow">

        <div className="row">
            <div className="col-sm-12">
                <h3>About Me</h3>
                <hr></hr>
            </div>
        </div>

        <div className="row" style={{padding:"20px"}}>
                <div className="col-sm-12">
                    <img id="myphoto" src={require("../utils/images/MyPic.JPG")} alt="MyPicture"/>
                        
                        <p id="text">My name is Deepika. I am a Full Stack Web Developer with a passion for problem solving. I build responsive websites, focussed on bringing value to the users. My background as a tester allows me to have a parallel perspective when writing code, which I believe will speed up the review process and hence be more time efficient.
                        I am passionate about holistic nutrition, home organization and enjoy interior decoration. 
                        <br></br>
                        <br></br>
                        I have the potential to be an asset in a team and a leader because of my virtue of persistence and the ability to take initiative and additional responsibilities. Check out my projects in the portfolio section.  </p>
                </div>
        </div>

    </div>
    )
}

export default AboutMeContent;