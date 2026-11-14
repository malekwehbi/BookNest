import "../Pages.css";

function About() {
  return (
    <div className="about-page">
      <div className="page-heading">
        <h1>About BookNest</h1>
        <p>Your trusted destination for discovering great books.</p>
      </div>

      <div className="about-content">
        <div className="about-card">
          <h2>Who We Are</h2>
          <p>
            BookNest is an online bookstore created for book lovers.
            We make it easy to explore different books, discover
            new authors, and find your next favorite read.
          </p>
        </div>

        <div className="about-card">
          <h2>Our Mission</h2>
          <p>
            Our mission is to make reading more accessible,
            enjoyable, and inspiring for everyone.
          </p>
        </div>

        <div className="about-card">
          <h2>Why Choose BookNest?</h2>
          <p>
            We offer a simple browsing experience, a carefully
            selected collection of books, and an easy-to-use
            search feature.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;