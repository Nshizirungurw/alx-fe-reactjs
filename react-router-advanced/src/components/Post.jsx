import React from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>Post {id}</h2>
      <p>This is the post content for post {id}.</p>
    </div>
  );
};

export default Post;
