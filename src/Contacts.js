import React from "react"
import ContactCard from "./ContactCard"
import ContactCard1 from "./ContactCard.1";

function Contacts() {
    return (
        <div className="contacts">
            <ContactCard
                imgSrc="http://placekitten.com/300/200"
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <ContactCard
                imgSrc="http://placekitten.com/400/200"
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <ContactCard
                imgSrc="http://placekitten.com/400/300"
                name="Destroyer"
                phone="(212) 555-3456"
                email="ofworlds@yahoo.com"
            />
            <ContactCard
                imgSrc="http://placekitten.com/200/100"
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <ContactCard1
                contact={{ name: "Mr. Whiskerson", imgSrc: "http://placekitten.com/300/200", phone: "(212) 555-1234", email: "mr.whiskaz@catnap.meow" }}
            />

            <ContactCard1
                contact={{ name: "Fluffykins", imgSrc: "http://placekitten.com/400/200", phone: "(212) 555-2345", email: "fluff@me.com" }}
            />

            <ContactCard1
                contact={{ name: "Destroyer", imgSrc: "http://placekitten.com/400/300", phone: "(212) 555-3456", email: "ofworlds@yahoo.com" }}
            />

            <ContactCard1
                contact={{ name: "Felix", imgSrc: "http://placekitten.com/200/100", phone: "(212) 555-4567", email: "thecat@hotmail.com" }}
            />
        </div>
    )
}

export default Contacts