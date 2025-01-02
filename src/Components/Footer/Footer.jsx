import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-socials">
        <a
          href="https://github.com/Mehranhsg"
          className="social-icon "
          target="_blank"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/mehran-khan-9a0970318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          className="social-icon"
          target="_blank"
        >
          LinkedIn
        </a>
        <a
          href="https://www.facebook.com/share/1FBRC9ybNW/"
          className="social-icon"
          target="_blank"
        >
          Facebook
        </a>
        <a href="https://linkedin.com" className="social-icon" target="_blank">
          UpWork
        </a>
      </div>
      <div className="footer-bottom">
        © 2024 Mehran Khan. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
