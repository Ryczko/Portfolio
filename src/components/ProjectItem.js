import React from 'react';


function ProjectItem(props) {


    const bgStyle = {
        backgroundImage: `url(${require('../img/projects/' + props.bg + '.webp')})`,
        flexBasis: (props.big) ? '50%' : '33%'
    }
    const technologiesList = props.technologies.map((technology, index) => (
        <img key={index} src={require(`../img/icons/${technology}.png`)} alt={`item${index}`} />
    ))

    return (
        <a style={bgStyle} className="projects__items-item" href={props.link} target={props.link[0] !== "#" ? "_blank" : ""} rel="noopener noreferrer">
            <h2>{props.title}</h2>
            <div className="projects__items-technologies">
                {technologiesList}
            </div>
            <h3>{props.description}</h3>
        </a>
    );
}

export default ProjectItem;