import React from "react";
import "./index.css";
import NavbarLanding from "../components/NavbarLanding";
import Greeting from "../components/Greeting";

function Index(){
    return(
        <>
            <NavbarLanding></NavbarLanding>
            <Greeting></Greeting>
        </>
    )
}

export default Index;