import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-head">
          <h2>Contact</h2>
          <p>Have a project or opportunity in mind? Let’s talk.</p>
        </div>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="row">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
              />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="What’s this about?"
            />
          </div>

          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message..."
            />
          </div>

          <button className="btn" type="submit" aria-label="Send message">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
