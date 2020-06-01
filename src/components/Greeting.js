import React from "react";
import { Link } from "react-router-dom";

function Greeting(){
    return(
        <div className="container-fluid d-flex align-items-center justify-content-center h-50 flex-column">
            <div>
            <h1>Hello , I'm Deepika.</h1>
            <h1>I'm a Full-Stack web developer.</h1>
            </div> 
            <Link className="portLink rounded p-3  mx-auto border border-dark shadow"  to="/portfolio"><strong>My work</strong></Link>
        </div>
    )
}

export default Greeting;