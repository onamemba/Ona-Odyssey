import React, { useState } from 'react';
import './ContactSection.css';

function ContactForm() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send email or API request
    console.log('Form submitted:', name);
    // Reset form fields
    setName('');
  };

  return (
    <div className="contact-form">
      <h2>Say hello</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      <div className="footer">
        <p>David Heckhoff</p>
        <a href="#">Legal Notice</a>
        <a href="#">Privacy Policy</a>
      </div>
    </div>
  );
}

export default ContactForm;