import React from "react";
import { Link , useLocation } from "react-router-dom"


function NavbarOthers() {

    let location = useLocation();
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow">
            <Link className="navbar-brand" to="/"><strong>Deepika Kulkarni</strong></Link>
            <div className="w-100"></div>    
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
    
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto ml-auto">
                <li className="nav-item">
                    <Link className={location.pathname === "/portfolioreact/" ? "nav-link active" : "nav-link"} to="/portfolioreact/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className={location.pathname === "/portfolioreact/about" ? "nav-link active" : "nav-link"} to="/portfolioreact/about">About</Link>
                </li>
                <li className="nav-item">
                <Link className={location.pathname === "/portfolioreact/portfolio" ? "nav-link active" : "nav-link"} to="/portfolioreact/portfolio">Portfolio</Link>
                </li>
                <li className="nav-item">
                    <Link className={location.pathname === "/portfolioreact/contact" ? "nav-link active" : "nav-link"} to="/portfolioreact/contact">Contact</Link>
                </li>
            </ul>
                
            </div>
        </nav>
    )
}

export default NavbarOthers;