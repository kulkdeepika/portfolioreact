import React from "react";

function ContactCard(){
    return(
        <div id="contactCard" className="col-sm-12 col-md-12 col-lg-7 d-flex justify-content-center" style={{marginBottom: "40px"}}>
            
            <div className="card" style={{width: "20rem", boxShadow: "5px 5px 5px darkgrey"}}>
                <img src={require("../utils/images/ContactMe.jpg")} className="card-img-top" alt="..."></img>
            
                <ul className="list-group list-group-flush">
                <li className="list-group-item"><strong>E-mail:</strong>  kulkdeepika@gmail.com</li>
                <li className="list-group-item"><strong>Phone:</strong>  425-979-9697</li>
                <li className="list-group-item"><strong>Location: </strong> Redmond, WA</li>
                </ul>
                
            </div>
        
        </div>
    )
}

export default ContactCard;