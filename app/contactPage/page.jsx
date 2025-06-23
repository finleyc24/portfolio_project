import React from "react";

const ContactPage = () => {
  return (
    <div>
      <h1>Contact Cole Finley</h1>
      <p>
        If you would like to get in touch with Cole Finley, please use the
        contact form below or reach out via email.
      </p>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};
export default ContactPage;
