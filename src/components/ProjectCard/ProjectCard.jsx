import React from 'react';
import './ProjectCard.css'

const ProjectCard = (props) => {
    return (
        <>
        <div className='project-card'>
            <div className='project-card-header'>
                <h3>{props.title}</h3>
            </div>
            <div className='project-card-description'>
                <p>{props.description}</p>
            </div>
            <div className='project-card-button-down'>
                <a href={props.link}><button className='project-card-button'>Github</button></a>
            </div>
        </div>      
        </>
    );
};

export default ProjectCard;