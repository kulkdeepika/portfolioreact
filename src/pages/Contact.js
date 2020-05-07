import React from "react";
import NavbarOthers from "../components/NavbarOthers";
import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";
import "./otherstyle.css";

function Contact(){
    return(
        <>
            <div className="container">
                <NavbarOthers></NavbarOthers>
                <div className="main-content shadow">
                    <div className="row">
                        <div class="col col-lg-2 col-sm-0 col-md-0"></div>
                        <ContactCard></ContactCard>
                        {/* <ContactForm></ContactForm> */}
                        <div class="col col-lg-3 col-sm-0 col-md-0"></div>
                    </div>
                </div>
            </div>
            <div className="push"></div>
        </>
    )
}

export default Contact;