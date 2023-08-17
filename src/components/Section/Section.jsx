import React from 'react'
import './Section.css';

const Section = ({sectionTitle}) => {
    return (
        <div className='section'>
            <h1>{sectionTitle}</h1>
        </div>
    );
}

export default Section;