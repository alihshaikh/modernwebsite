import React from 'react';
import './BlogPost.css'

const BlogPost = (props) => {
    return (
        <div className='blog-wrapper'>
            <div className='blog-title'>
                <h2>{props.title}</h2>
            </div>
            <div className='blog-description'>
                <p>{props.description}</p>
            </div>
            <div>
                <img  className='blog-image' src={props.image}></img>
            </div>
        </div>
    );
}

export default BlogPost;