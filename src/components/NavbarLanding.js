import React from "react";
import { Link , useLocation} from "react-router-dom";

function NavbarLanding(){

    const location = useLocation();
    return(
        <div className="d-flex flex-column flex-row-reverse align-items-right px-md-4 mb-3">
        <nav className=" navbar navbar-expand-lg navbar-light" style={{borderColor: "transparent"}}> 
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
        
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto ml-auto">
                <li className="nav-item active">
                    <Link to="/" className= {location.pathname === "/" ? "nav-link active" : "nav-link"}>Home</Link>
                </li>
                <li className="nav-item active">
                    <Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"} >About</Link>
                </li>
                <li className="nav-item active">
                    <Link to="/portfolio" className= {location.pathname === "/portfolio" ? "nav-link active" : "nav-link"} >Portfolio</Link>
                </li>
                <li className="nav-item active">
                    <Link to="/contact" className= {location.pathname === "/contact" ? "nav-link active" : "nav-link"} >Contact</Link>
                </li>
                </ul>
                
            </div>
        </nav>
    </div>
    )
}

export default NavbarLanding;