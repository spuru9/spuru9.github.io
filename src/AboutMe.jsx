import React from 'react';
import './AboutMe.css';
import profilePic from './assets/image.png';
import data from './data.json';

const AboutMe = () => {
  const { profile, experiences, skills, awards } = data;

  return (
    <div className="about-me-container">
      <header className="about-me-header">
        <div className="header-info">
          <h1>{profile.name}</h1>
          <p className="tagline">{profile.tagline}</p>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}>Email</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <span className="phone">{profile.phone}</span>
          </div>
        </div>
        <img src={profilePic} alt={profile.name} className="profile-photo" />
      </header>

      <section className="skills-section">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <div key={index} className="skill-card">
              <h3>{skillGroup.category}</h3>
              <div className="skill-tags">
                {skillGroup.items.map((item, i) => (
                  <span key={i} className="skill-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="awards-section">
        <h2>Awards & Recognition</h2>
        <div className="awards-grid">
          {awards.map((award, index) => (
            <div key={index} className="award-item">
              <span className="award-title">{award.title}:</span>
              <span className="award-detail">{award.detail}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="timeline-section">
        <h2>Professional Journey</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-year">{exp.year}</span>
                <h3 className="timeline-role">{exp.role}</h3>
                <h4 className="timeline-company">{exp.company}</h4>
                <p className="timeline-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
