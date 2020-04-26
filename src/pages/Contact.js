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
                        <ContactCard></ContactCard>
                        <ContactForm></ContactForm>
                    </div>
                </div>
            </div>
            <div className="push"></div>
        </>
    )
}

export default Contact;