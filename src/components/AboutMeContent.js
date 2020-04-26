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
                        
                        <p id="text">My name is Deepika. I graduated with a bachelors degree in Electronics and Communications engineering in the year 2007. My work involved Hardware-software integration testing for aviation systems. 
                                I am passionate about home organization and enjoy interior decoration. I also enjoy dancing and have participated in several community dance events. 
                                <br></br>
                                <br></br>
                                I would like to explore a career in coding mainly because I find it interesting and challenging. I believe that hard work, persistance, courage and discipline are essential for success; but the most important thing is to push oneself harder and harder, believing that any hurdle can be overcome. </p>
                </div>
        </div>

    </div>
    )
}

export default AboutMeContent;