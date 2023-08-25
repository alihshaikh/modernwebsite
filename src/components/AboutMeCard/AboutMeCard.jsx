import React from 'react';
import './AboutMeCard.css'
import linked from '../../imgs/linked.jpeg'

const AboutMeCard = ({image, content}) => {
    return (
        <div className='about-me-wrapper'>
            <div>
                <img className='about-me-image' src={image}></img>
            </div>
            <div className='about-me-description'> 
                <p>{content}</p>
            </div>
        </div>
    );
}

export default AboutMeCard;
