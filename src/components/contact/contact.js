import React, { useRef, useState } from 'react';
import "./contact.css";
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setMessage('');

    emailjs.sendForm('service_b4z8xon', 'template_abeti4r', form.current, 'iQkZfO9pZG0s4ehA5')
      .then((result) => {
          console.log(result.text);
          setMessage('Message sent successfully!');
          setSending(false);
      }, (error) => {
          console.log(error.text);
          setMessage('Failed to send message. Please try again later.');
          setSending(false);
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
          <button type="submit" className='btn btn-contact' disabled={sending}>
            {sending ? 'Sending...' : 'Send Message'}
          </button>
           {message && <p>{message}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact
