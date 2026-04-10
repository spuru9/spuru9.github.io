import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BlogsPage from './BlogsPage';
import AboutMe from './AboutMe';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <div className="nav-logo">Purushottam Sinha</div>
          <ul className="nav-links">
            <li>
              <Link to="/">Home (Blogs)</Link>
            </li>
            <li>
              <Link to="/about">About Me</Link>
            </li>
          </ul>
        </nav>

        <main className="content">
          <Routes>
            <Route path="/" element={<BlogsPage />} />
            <Route path="/about" element={<AboutMe />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>&copy; 2026 My Portfolio. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
