import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";



function SocialItem(props) {
    AOS.init();
    return (
        <div className="socials__item" data-aos-once="true" data-aos="zoom-in" data-aos-delay={props.time} data-aos-offset="-100">
            <a href={props.link} target="_blank" rel="noopener noreferrer"><img src={require(`../img/icons/${props.icon}.png`)} alt="obraz" /></a>
        </div >
    );
}

export default SocialItem;