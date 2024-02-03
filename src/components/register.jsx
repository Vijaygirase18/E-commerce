import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
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
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <label style={{ display: 'block', marginBottom: '8px' }}>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', marginBottom: '12px', boxSizing: 'border-box' }}
        />
      </label>
      <br />
      <label style={{ display: 'block', marginBottom: '8px' }}>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', marginBottom: '12px', boxSizing: 'border-box' }}
        />
      </label>
      <br />
      <label style={{ display: 'block', marginBottom: '8px' }}>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', marginBottom: '12px', boxSizing: 'border-box' }}
        />
      </label>
      <br />
      <label style={{ display: 'block', marginBottom: '8px' }}>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', marginBottom: '12px', boxSizing: 'border-box' }}
        />
      </label>
      <br />
      <button type="submit" style={{ backgroundColor: '#4caf50', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
    </form>
  );
};

export default RegistrationForm;
