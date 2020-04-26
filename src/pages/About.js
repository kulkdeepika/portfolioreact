import React from "react";
import NavbarOthers from "../components/NavbarOthers";
import AboutMeContent from "../components/AboutMeContent";
import "./otherstyle.css";

function About(){
    return(
        <>
            <div className="container">
                <NavbarOthers></NavbarOthers>
                <AboutMeContent></AboutMeContent>
            </div>
            <div className="push"></div>
        </>
    )
}

export default About;