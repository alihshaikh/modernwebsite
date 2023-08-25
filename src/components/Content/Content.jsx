import React from 'react';
import './Content.css'

const Content = (props) => {
    return (
        <div className='content-card' id='card'>
            <div className='image'>
                {props.image && <img className="imageScaling" src={props.image} alt="Image" />}
            </div>
            <div className='title'>
                <h4>{props.title}</h4>
            </div>
            <div className='content'>
            <ul>
                    {props.content.map((bulletPoint, index) => (
                        <li key={index}>{bulletPoint}</li>
                    ))}
                </ul>
            </div>
            <div className='date'>
                <h4>{props.date}</h4>
            </div>
        </div>
        );
};

export default Content;