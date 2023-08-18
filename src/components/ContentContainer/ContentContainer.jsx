import React from 'react';
import './ContentContainer.css'


const ContentContainer = ({title, content, isDarkMode}) => {
    const textColor = {
        color: isDarkMode ? 'white' : 'black'
    }

  return (
    <div style={textColor}>
        <h2>{title}</h2>
        <div>{content}</div>
    </div>
  );
};

export default ContentContainer;