import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = e => {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID','YOUR_TEMPLATE_ID',formRef.current,'YOUR_USER_ID')
      .then(() => setStatus('Message sent!'), () => setStatus('Oops, try again.'));
  };

  return (
    <motion.section id="contact" className="section contact" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
      <h3>Contact Us</h3>
      <form ref={formRef} className="contact-form" onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Name" required />
        <input type="email" name="user_email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" rows="4" required />
        <button type="submit" className="btn">Send</button>
      </form>
      {status && <p className="status">{status}</p>}
    </motion.section>
  );
}
