// About.js
import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About Us</h1>
        <p>We are CTI Monster, your one-stop solution for digital marketing.</p>
      </section>

      <section className="about-details">
        <h2>Our Story</h2>
        <p>
          Founded in 2023, CTI Monster specializes in providing top-tier digital
          marketing services, web development, SEO, and content strategy
          solutions. Our mission is to help businesses grow and succeed in the
          digital world.
        </p>
      </section>

      <section className="our-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to empower businesses to achieve their full potential
          through cutting-edge digital marketing strategies and services.
        </p>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="/path-to-team-member-image1.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src="/path-to-team-member-image2.jpg" alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>Head of Marketing</p>
          </div>
          {/* Add more team members if needed */}
        </div>
      </section>
    </div>
  );
};

export default About;
