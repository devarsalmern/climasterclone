import React, { useEffect, useState } from "react";
import "./HeroSection.css"; // Make sure to import the CSS

const HeroSection = () => {
  const [text, setText] = useState("");
  const fullText = "Hello, I'm Arsal. ";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100); // Adjust typing speed here (in milliseconds)

    return () => clearInterval(typingInterval);
  }, []); // Empty dependency array to run on mount only

  return (
    <section className="hero">
      <h1 className="typing-effect">{text}</h1>
      <h3>My Interests,</h3>
      <div className="interests">
        <button className="btn btn-red">Botnet</button>
        <button className="btn btn-blue">CTI</button>
        <button className="btn btn-green">Ransomware</button>
        <button className="btn btn-yellow">Android</button>
        <button className="btn btn-purple">RAT</button>
        <button className="btn btn-orange">Blueteam</button>
        <button className="btn btn-cyan">Phishing</button>
        <button className="btn btn-magenta">FUD</button>
        <button className="btn btn-gray">Redteam</button>
      </div>
    </section>
  );
};

export default HeroSection;
