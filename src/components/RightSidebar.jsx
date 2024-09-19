import React from "react";
import { useNavigate } from "react-router-dom";
import "./RightSidebar.css";

const RightSidebar = () => {
  const navigate = useNavigate();

  const openPDF = () => {
    navigate("/pdf");
  };

  return (
    <div className="sidebar-container">
      <div className="content">
        <div className="avatar-section">
          <img src="./images/avatar.jpg" alt="Avatar" className="avatar-img" />
          <p className="description">0x6rss. Malware and CTI analyst.</p>
        </div>

        <div className="recent-posts">
          <h2>Recent Posts:</h2>
          <div className="post" onClick={openPDF}>
            <h3>PDF malicious code injection and PDF dropper (ADOBE)</h3>
            <p>July 25, 2024 17:30:12</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
