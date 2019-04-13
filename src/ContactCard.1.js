import React from "react"

function ContactCard1(props) {
    return (
        <div className="contacts">
            <div className="contact-card">
                <img src={props.contact.imgSrc} alt="" />
                <h3>{props.contact.name}</h3>
                <p>Phone: {props.contact.phone}</p>
                <p>Email: {props.contact.email}</p>
            </div>
        </div>
    )
}

export default ContactCard1