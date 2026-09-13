import "./Footer.css";
import logo from "../../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and description */}
        <div className="footer-brand">
          <img
            src={logo}
            alt="Dev Stack"
            className="footer-logo"
          />

          <p className="footer-description">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>

          <div className="footer-socials">
            <a href="#">GitHub</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>

        {/* Product */}
        <div className="footer-column">
          <h3>PRODUCT</h3>

          <a href="#">Home</a>
          <a href="#">Technologies</a>
          <a href="#">Projects</a>
        </div>

        {/* Company */}
        <div className="footer-column">
          <h3>COMPANY</h3>

          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Careers</a>
        </div>

        {/* Legal */}
        <div className="footer-column">
          <h3>LEGAL</h3>

          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>

      {/* Bottom section */}
      <div className="footer-bottom">
        <p>© 2026 Dev Stack. All rights reserved.</p>

        <div className="footer-bottom-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;