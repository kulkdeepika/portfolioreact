import React from "react";

function ContactForm(){
    return(
        <div className="col-sm-12 col-md-12 col-lg-6">
            <section id="body">
                <h2 style={{color:"#768647"}}>Contact</h2>
                <hr></hr>

                <form className= "contactMe">
                        Name<br></br><input type="text" name="Name" placeholder="John Smith" autoFocus></input><br></br><br></br>
                        E-mail<br></br><input type="text" name="emailid" placeholder="example@gmail.com"></input><br></br><br></br>
                        Message<br></br><textarea id="messageBox" type="text" name="message"></textarea><br></br><br></br>

                        <button id="submit">Submit</button>
                </form>

            </section>

        </div>
    )
}

export default ContactForm;