import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Discover Your Next Great Read</h1>

          <p>
            Welcome to BookNest, your online destination
            for amazing books. Explore our collection
            and find your next favorite story.
          </p>

          <Link to="/books" className="explore-btn">
            Explore Books
          </Link>
        </div>

        <div className="hero-image">
         <img src="/images/books-hero.jpg" alt="Book collection" />
        </div>
      </section>
    </div>
  );
}

export default Home;