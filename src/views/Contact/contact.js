import React, { useEffect } from "react";
import ContactBody from '../../component/ContactBody/ContactBody'
import ContactMess from '../../component/ContactMess/ContactMess';

function Contact() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="Contact">
            <ContactBody />
            <ContactMess />
        </div>
    );
}
export default Contact;