import React from "react";
import "./Footer.css";
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";
import image4 from "../assets/image4.jpeg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>Deed Poll Department</h3>
          <p>
            We are not a government agency. We prepare self-declared unenrolled
            deed polls and have helped thousands of UK residents change their
            names.
          </p>
          <span>📞 +44 07999988177</span>
          <span>📧 support@ukdeedpolldepartment.org.uk</span>
          <span>📍 E1 6BD Commercial Street, London</span>
        </div>
        <div className="footer-middle">
          <div className="footer-column">
            <a href="/">Home</a>
            <a href="/services">Services</a>
            <a href="/howit">How It Works</a>
            <a href="/faq">FAQs</a>
            <a href="/contact">Contact</a>
          </div>
          <div className="footer-column">
            <div className="footer-images">
              <img src={image1} alt="Image 1" />
              <img src={image2} alt="Image 2" />
              <img src={image3} alt="Image 3" />
              <img src={image4} alt="Image 4" />
            </div>
            <a href="#">
              <em>*Guaranteed<br /> acceptance at all<br /> organizations.</em>
            </a>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms">Terms of Services</a>
          </div>
        </div>
      </div>
      <div className="footer-line"></div>
      <div className="footer-bottom">© 2025 DEED POLL. All Rights Reserved.</div>
    </footer>
  );
};

export default Footer;
