import React from "react"

function ContactCard(props) {
    return (
        <div className="contacts">
            <div className="contact-card">
                <img src={props.imgSrc} alt="" />
                <h3>{props.name}</h3>
                <p>Phone: {props.phone}</p>
                <p>Email: {props.email}</p>
            </div>
        </div>
    )
}

export default ContactCard