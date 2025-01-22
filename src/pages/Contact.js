import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    // Send the form data via EmailJS using the script-based approach
    emailjs.sendForm('service_x790cye', 'service_qe9wmp3', e.target, 'WdvYBpXmZbK_FoOsT')
      .then((response) => {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        setStatus('Message sent successfully.');
        console.error('EmailJS Error:', error);
      });
  };

  return (
    <section className="contact-us">
      <h1 className="contact-title">Contact Us</h1>
      <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="example@email.com"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="How Can I Help You ?"
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
      {status && <p className="form-status">{status}</p>}
    </section>
  );
};

export default Contact;

