import React, { Component } from 'react';

import './styles.css';

function Comment({ data }) {
    return (
        <div className="comment">
            <img className="comment--avatar avatarPhoto" src={data.author.avatar} />
            <div className="comment--content">
                <h3>{data.author.name}</h3>
                <p>{data.content}</p>
            </div>
        </div>
    );

}

export default Comment;