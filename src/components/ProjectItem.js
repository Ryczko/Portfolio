import React from 'react';


function ProjectItem(props) {


    const bgStyle = {
        backgroundImage: `url(${require('../img/projects/' + props.bg + '.png')})`,
        flexBasis: (props.big) ? '50%' : '33%'
    }

    return (
        <a style={bgStyle} className="projects__items-item" href={props.link} target={props.link[0] !== "#" ? "_blank" : ""} rel="noopener noreferrer">
            <h2>{props.title}</h2>
            <h3>{props.description}</h3>
        </a>
    );
}

export default ProjectItem;