import React from 'react'
import './Section.css';

const Section = ({sectionTitle, isDarkMode}) => {

    const titleColor = {
        color: isDarkMode ? 'white' : 'black'
    }

    return (
        <div className='section' style={titleColor}>
            <h1>{sectionTitle}</h1>
        </div>
    );
}

export default Section;