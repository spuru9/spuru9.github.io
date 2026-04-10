import React, { useState, useEffect } from 'react';
import './BlogsPage.css';
import data from './data.json';

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      await new Promise(resolve => setTimeout(resolve, 800));
      setBlogs(data.blogs);
      setLoading(false);
    };
    fetchBlogs();
  }, []);

  return (
    <div className="blogs-page">
      <header className="blogs-header">
        <h1>My Blog Posts</h1>
        <p>Welcome to my collection of thoughts and tutorials</p>
      </header>

      {loading ? (
        <div className="loading">Loading blogs...</div>
      ) : (
        <div className="blogs-container">
          {blogs.map(blog => (
            <article key={blog.id} className="blog-card-full">
              <div className="blog-card-header">
                <h2 className="blog-title">{blog.title}</h2>
                <span className="blog-date">{blog.date}</span>
              </div>
              
              <div className="blog-card-body">
                <p className="blog-excerpt">{blog.excerpt}</p>
                <div className="blog-tags">
                  {blog.tags.map(tag => (
                    <span key={tag} className="blog-tag">{tag}</span>
                  ))}
                </div>
                <a href={blog.url} target="_blank" rel="noopener noreferrer" className="read-more-btn">
                  Read on Medium
                </a>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogsPage;
