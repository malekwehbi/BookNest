import { Link } from "react-router-dom";
import "../Pages.css";

function Features() {
  return (
    <div className="features-page">
      <div className="page-heading">
        <h1>Our Features</h1>
        <p>Everything you need to discover your next great book.</p>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <span className="feature-icon">📚</span>
          <h2>Browse Books</h2>
          <p>
            Explore our collection of books with clear
            descriptions, authors, and prices.
          </p>
        </div>

        <div className="feature-card">
          <span className="feature-icon">🔍</span>
          <h2>Search Books</h2>
          <p>
            Quickly find books by typing their titles
            into our search bar.
          </p>
        </div>

        <div className="feature-card">
          <span className="feature-icon">📱</span>
          <h2>Responsive Design</h2>
          <p>
            Enjoy a comfortable browsing experience
            on your laptop, tablet, or phone.
          </p>
        </div>

        <div className="feature-card">
          <span className="feature-icon">💰</span>
          <h2>Book Prices</h2>
          <p>
            View book prices clearly and compare
            different titles before choosing.
          </p>
        </div>
      </div>

      <Link to="/books" className="features-button">
        Explore Our Books
      </Link>
    </div>
  );
}

export default Features;