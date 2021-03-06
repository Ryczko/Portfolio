import React from "react";
import KnowladgeItem from "../components/KnowladgeItem";
import KnowladgeOther from "../components/KnowladgeOther";
import AOS from "aos";
import "aos/dist/aos.css";

function Knowladge(props) {
  AOS.init();

  return (
    <section className="knowladge" id="knowladge">
      <div className="knowladge__wrapper">
        <h1 data-aos="zoom-out-up" data-aos-once="true" data-aos-duration="500">
          {props.content.h1}
        </h1>
        <div className="knowladge__content">
          <div
            className="knowladge__content-items"
            data-aos-once="true"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            <KnowladgeItem name="html" />
            <KnowladgeItem name="css" />
            <KnowladgeItem name="typescript" />      
            <KnowladgeItem name="react" />
            <KnowladgeItem name="angular" />
            <KnowladgeItem name="node" />
            
          </div>
          <img
            className="knowladge__content-img"
            src={require("../img/laptop.svg")}
            alt="photob"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-once="true"
            data-aos-delay="500"
          />
        </div>
        <div data-aos="flip-down" data-aos-duration="700" data-aos-once="true">
          <h2>{props.content.others}</h2>
          <div className="knowladge__others">
            <KnowladgeOther name="sass.png" />
            <KnowladgeOther name="git.png" />
            <KnowladgeOther name="firebase.webp" />
            <KnowladgeOther name="redux.png" />
            <KnowladgeOther name="socket.png" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Knowladge;
