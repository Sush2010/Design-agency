"use client";
import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 1000);   
  }

  return (
    <section className="contact" id="contact">
      <h2>Contact form</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" rows="4" required />

        <button type="submit" className={submitted ? "success" : "submitbutton"}>{submitted? "Message sent" : "Submit"}</button>

      </form>
    </section>
  );
}

export default Contact;