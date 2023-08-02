import React from 'react';
import {IPost} from "../types/post.type";

interface IProps {
  post: IPost
}

function Post({post}: IProps) {
  return (
    <div>
      <p>ID: {post.id}</p>
      <h3>{post.title}</h3>
      <p>Body: {post.body}</p>
    </div>
  );
}

export default Post;
