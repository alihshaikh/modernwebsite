import React from 'react';
import './Textbox.css'


const Textbox = ({title, content, isDarkMode}) => {
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

export default Textbox;