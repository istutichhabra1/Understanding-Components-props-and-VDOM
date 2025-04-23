import React from 'react';
import BlogPost from './BlogPost'; 

const blogs = [
  { title: "React Basics", content: "Learn the basics of React.", isFeatured: true },
  { title: "Advanced React", content: "Delve deeper into React.", isFeatured: false },
  { title: "React Performance Tips", content: "Optimize your React apps.", isFeatured: true },
];

function BlogList() {
  return (
    <div style={styles.container}>
      <h1>Blog Posts</h1>
      {blogs.map((blog, index) => (
        <BlogPost
          key={index}
          title={blog.title}
          content={blog.content}
          isFeatured={blog.isFeatured}
        />
      ))}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f4f4f4',
    borderRadius: '10px',
  },
};

export default BlogList;
