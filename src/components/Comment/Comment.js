import React, { Component } from 'react';

function Comment({ data }) {
    return (
        <div className="comment">
            <img className="comment--avatar" src={data.author.avatar} />
            <div className="comment--content">
                <h3>{data.author.name}</h3>
                <p>{data.content}</p>
            </div>
        </div>
    );

}

export default Comment;