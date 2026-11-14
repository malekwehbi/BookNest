import { useState } from "react";
import "../Pages.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-page">
      <div className="page-heading">
        <h1>Contact Us</h1>
        <p>Have a question? We would love to hear from you!</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            Have questions about our books or website?
            Send us a message using the contact form.
          </p>

          <div className="contact-detail">
            <span>📚</span>
            <div>
              <h3>BookNest</h3>
              <p>Your online bookstore</p>
            </div>
          </div>

          <div className="contact-detail">
            <span>💬</span>
            <div>
              <h3>Send a Message</h3>
              <p>We are happy to hear your feedback.</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send Us a Message</h2>

          <label htmlFor="contact-name">Your Name</label>
          <input
            id="contact-name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="contact-email">Your Email</label>
          <input
            id="contact-email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="contact-message">Your Message</label>
          <textarea
            id="contact-message"
            placeholder="Write your message..."
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <button type="submit">Send Message</button>

          {submitted && (
            <p className="success-message" role="status">
              Your message was entered successfully!
              This demo does not send emails yet.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;