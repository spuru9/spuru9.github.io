import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BlogsPage from './BlogsPage';
import AboutMe from './AboutMe';
import BookReviews from './BookReviews';
import { useTheme } from './ThemeContext';
import './App.css';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <div className="nav-logo">Purushottam Sinha</div>
          <div className="nav-right">
            <ul className="nav-links">
              <li>
                <Link to="/">About Me</Link>
              </li>
              <li>
                <Link to="/technical">Technical</Link>
              </li>
              <li>
                <Link to="/book-reviews">Book Reviews</Link>
              </li>
            </ul>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>
        </nav>

        <main className="content">
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/technical" element={<BlogsPage />} />
            <Route path="/book-reviews" element={<BookReviews />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>&copy; 2026 Purushottam Sinha. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
