import React from 'react';
import './Textbox.css'


const Textbox = ({title, content}) => {
  return (
    <div className='textColor'>
        <h2>{title}</h2>
        <div>{content}</div>
    </div>
  );
};

export default Textbox;