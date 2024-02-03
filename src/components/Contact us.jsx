import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
      }}
    >
      <h2>Contact Us</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <label style={{ marginBottom: '10px' }}>
          Your Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              padding: '8px',
              marginBottom: '15px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              boxSizing: 'border-box',
              width: '100%',
            }}
          />
        </label>
        <label style={{ marginBottom: '10px' }}>
          Your Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              padding: '8px',
              marginBottom: '15px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              boxSizing: 'border-box',
              width: '100%',
            }}
          />
        </label>
        <label style={{ marginBottom: '10px' }}>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            style={{
              padding: '8px',
              marginBottom: '15px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              boxSizing: 'border-box',
              width: '100%',
            }}
          ></textarea>
        </label>
        <button
          type="submit"
          style={{
            backgroundColor: '#4caf50',
            color: 'white',
            padding: '10px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
