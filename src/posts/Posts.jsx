import React from 'react';
import './posts.css'; // Import your CSS file for styling

const BlogPost = ({ id, title, summary, date, imageUrl }) => {
  return (
    <a href="#" className="blog-post">
      <img src={imageUrl} alt={title} className="blog-post-image" />
      <div className="blog-post-content">
        <h2 className="blog-post-title">{title}</h2>
        <p className="blog-post-summary">{summary}</p>
        <p className="blog-post-date">{date}</p>
      </div>
    </a>
  );
};

export default BlogPost;