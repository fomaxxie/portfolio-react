import React, { useRef } from 'react';
import "./contact.css";
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b4z8xon', 'template_abeti4r', form.current, 'iQkZfO9pZG0s4ehA5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contact">
      <div className='contact-container'>
        <h2 style={{textAlign: "center"}}>Get In Touch</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='user_name' placeholder='Your Name' required />
          <input type="email" name="user_email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required />
          <button type="submit" className='btn btn-contact' value="Send">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact
