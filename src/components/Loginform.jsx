// LoginForm.js
import React, { useState } from 'react';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for handling login here
    console.log('Login submitted:', formData);
    // You can send the data to a server, API, or perform any other action
  };

  return (
    
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto', padding: '40px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="username" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          Username:
        </label>
        <input
          type="text"
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }}
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="password" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          Password:
        </label>
        <input
          type="password"
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }}
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit" style={{ display: 'block', width: '100%', padding: '10px', color: '#fff', backgroundColor: '#007bff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
