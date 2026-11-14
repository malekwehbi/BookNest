
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <Link to="/" className="footer-logo">
          📚 BookNest
        </Link>

        <p className="footer-tagline">
          Discover. Read. Grow.
        </p>

        <p className="footer-copyright">
          © {new Date().getFullYear()} BookNest. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
