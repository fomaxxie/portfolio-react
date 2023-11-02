import React, { useRef } from 'react';
import "./contact.css";
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b4z8xon', 'template_s9vkip6', form.current, 'iQkZfO9pZG0s4ehA5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contact">
      <div className='contact-container'>
        <h2>Get In Touch</h2>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <button type="submit" className='btn' value="Send">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact
