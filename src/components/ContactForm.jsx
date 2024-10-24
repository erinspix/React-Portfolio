import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={handleInputChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleInputChange} required />
      <textarea name="message" placeholder="Message" onChange={handleInputChange} required />
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
