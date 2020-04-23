import React from 'react';


function AboutItem(props) {
    return (
        <div className="about-item">
            <div className="about-item__shape"><i className={props.item} /></div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>


        </div>
    );
}

export default AboutItem;