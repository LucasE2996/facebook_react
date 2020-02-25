import React, { Component } from "react";
import PropTypes from "prop-types";

import Comment from "../Comment/Comment";

import "./styles.css";

function Post({ data }) {
  return (
    <div className="post">
      <div className="post--header">
        <img src={data.author.avatar} />
        <div className="post--header-name">
          <h5>{data.author.name}</h5>
          <p>{data.date}</p>
        </div>
      </div>
      <h5>{data.content}</h5>
      <div className="comments">
        {data.comments.map(comment => (
          <Comment key={comment.id} data={comment} />
        ))}
      </div>
    </div>
  );
}

Post.propTypes = {
  data: PropTypes.object.isRequired
};

export default Post;
