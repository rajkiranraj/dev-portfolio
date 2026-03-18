import React from "react";
import "./DownloadCV.css";

const DownloadCV = () => {
  return (
    <a
      href="/Fullstack_developer.pdf"
      download
      className="download-cv-btn"
      aria-label="Download CV"
    >
      
      <span className="btn-gloss" />

     
      <svg
        className="btn-icon"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>

      <span className="btn-label">Download CV</span>
    </a>
  );
};

export default DownloadCV;
