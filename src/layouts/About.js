import React from 'react';
import AboutItem from '../components/AboutItem';

import AOS from "aos";
import "aos/dist/aos.css";

function About(props) {



    AOS.init();


    return (
        <div className="about" id="about" >
            <h1 data-aos="fade-up" data-aos-delay="400" data-aos-once="true">{props.content.h1}</h1>
            <p className="about__description" data-aos="fade-up" data-aos-delay="400" data-aos-once="true">{props.content.description}
            </p>
            <div className="about__items" data-aos="flip-up" data-aos-once="true" data-aos-delay="800" data-aos-duration="1000">
                <AboutItem title={props.content.items.title1} description={props.content.items.description1} item="icon-stopwatch" />
                <AboutItem title={props.content.items.title2} description={props.content.items.description2} item="icon-search" />
                <AboutItem title={props.content.items.title3} description={props.content.items.description3} item="icon-mobile" />
            </div>


        </div>
    );
}

export default About;