import React from 'react';
import ContactForm from '../components/ContactForm';
import Socials from '../components/Socials';
import AOS from "aos";
import "aos/dist/aos.css";

function Contact(props) {

    AOS.init();
    return (
        <div className="contact" id="contact">
            <h1 data-aos="zoom-in-up" data-aos-duration="800" data-aos-once="true">{props.content.h1}</h1>

            {/* <ContactForm content={props.content} /> */}
            <Socials />
            <p className="contact__mail" data-aos-offset="-150" data-aos="zoom-out-up" data-aos-once="true" data-aos-duration="500"> <i className="icon-mail" />konradryczko1@gmail.com</p>

        </div>
    );
}

export default Contact;