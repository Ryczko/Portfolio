import React from 'react';
import KnowladgeItem from '../components/KnowladgeItem'
import KnowladgeOther from '../components/KnowladgeOther';
import AOS from "aos";
import "aos/dist/aos.css";

function Knowladge(props) {


    AOS.init();




    return (
        <div className="knowladge" id="knowladge">
            <div className="knowladge__wrapper">
                <h1 data-aos="zoom-out-up" data-aos-once="true" data-aos-duration="500">{props.content.h1}</h1>
                <div className="knowladge__content">
                    <div className="knowladge__content-items" data-aos-once="true" data-aos="fade-right" data-aos-duration="800" data-aos-delay="500">
                        <KnowladgeItem name='html' level={80} />
                        <KnowladgeItem name='css' level={75} />
                        <KnowladgeItem name='js' level={75} />
                        <KnowladgeItem name='react' level={60} />
                        <KnowladgeItem name='node' level={40} />
                        <KnowladgeItem name='wordpress' level={40} />
                    </div>
                    <img className="knowladge__content-img" src={require('../img/laptop.svg')} alt="photob" data-aos="fade-left" data-aos-duration="800" data-aos-once="true" data-aos-delay="500" />
                </div>
                <div data-aos="flip-down" data-aos-duration="700" data-aos-once="true">
                    <h2>{props.content.others}</h2>
                    <div className="knowladge__others">

                        <KnowladgeOther name="git.png" />
                        <KnowladgeOther name="sass.png" />
                        <KnowladgeOther name="socket.png" />
                        <KnowladgeOther name="gsap.svg" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Knowladge;