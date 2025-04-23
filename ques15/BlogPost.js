import React from 'react';

function BlogPost({ title, content, isFeatured }) {
  const postStyle = {
    backgroundColor: isFeatured ? 'lightyellow' : 'white',
    padding: '20px',
    margin: '10px 0',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={postStyle}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default BlogPost;
