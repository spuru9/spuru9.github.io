import React from 'react';
import './BookReviews.css';

const BookReviews = () => {
  return (
    <div className="book-reviews-page">
      <header className="reviews-header">
        <h1>Book Reviews</h1>
        <p>A collection of my thoughts on the books I've read.</p>
      </header>

      <div className="coming-soon-container">
        <div className="coming-soon-card">
          <h2>Coming Soon</h2>
          <p>I'm currently curating a list of my favorite reads and writing down my insights. Stay tuned!</p>
          <div className="coming-soon-icon">📚</div>
        </div>
      </div>
    </div>
  );
};

export default BookReviews;
