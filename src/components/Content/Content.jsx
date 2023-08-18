import React from 'react';

const Content = (props) => {
    return <div>
            <h4>{props.title}</h4>
            <p className='content-left'>{props.content}</p>
        </div>
};

export default Content;