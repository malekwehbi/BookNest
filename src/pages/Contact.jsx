
function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>

      <p>
        Have a question? Feel free to contact us.
      </p>

      <form>
        <div>
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label>Message:</label>
          <textarea
            placeholder="Write your message"
          />
        </div>

        <button type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
