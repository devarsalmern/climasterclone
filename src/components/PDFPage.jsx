import React from "react";
import { Link } from "react-router-dom";
import "./PDFPage.css"; // CSS for styling the PDF page

const PDFPage = () => {
  return (
    <div className="pdf-page-container">
      <div className="pdf-viewer">
        <iframe
          src="/path/to/your/pdf/my.pdf" // Adjust this path accordingly
          width="100%"
          height="100%"
          style={{ border: "none" }}
          title="PDF Viewer"
        ></iframe>
      </div>
      <div className="sidebar-container">
        <div className="content">
          <div className="avatar-section">
            <img
              src="./images/avatar.jpg"
              alt="Avatar"
              className="avatar-img"
            />
            <p className="description">0x6rss. Malware and CTI analyst.</p>
          </div>

          <div className="recent-posts">
            <h2>Recent Posts:</h2>
            <div className="post">
              <h3>PDF malicious code injection and PDF dropper (ADOBE)</h3>
              <p>July 25, 2024 17:30:12</p>
            </div>
          </div>
        </div>
      </div>
      <Link to="/" className="back-button">
        Back
      </Link>
    </div>
  );
};

export default PDFPage;
