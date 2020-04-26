import React from "react";

function ContactCard(){
    return(
        <div id="contactCard" className="col-sm-12 col-md-12 col-lg-6">
            
            <div className="card" style={{width: "18rem"}}>
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