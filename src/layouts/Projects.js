import React from 'react';
import ProjectItem from '../components/ProjectItem';
import { staticItems } from '../content/staticItems';


function Projects(props) {
    const items = props.content.projectsItems.map((el, index) => (
        <ProjectItem
            key={el.title}
            title={el.title}
            description={el.description}
            big={staticItems.projects.projectsItems[index].big}
            veryBig={staticItems.projects.projectsItems[index].veryBig}
            bg={staticItems.projects.projectsItems[index].bg}
            technologies={staticItems.projects.projectsItems[index].technologies}
            link={staticItems.projects.projectsItems[index].to} />

    ))


    return (
        <section className="projects" id="projects">
            <h1 data-aos="fade-down" data-aos-once="true">{props.content.h1}</h1>
            <div className="projects__items" data-aos="fade-up" data-aos-duration="800" data-aos-once="true" data-aos-delay="200">
                {items}
            </div>
        </section>
    );
}

export default Projects;