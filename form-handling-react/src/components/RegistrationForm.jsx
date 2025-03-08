import React, { useState } from 'react';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!username) newErrors.username = 'Username is required';
    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', { username, email, password });
      
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={username} 
          onChange={handleChange}
        />
        {errors.username && <div>{errors.username}</div>}
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email} 
          onChange={handleChange}
        />
        {errors.email && <div>{errors.email}</div>}
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}  
          onChange={handleChange}
        />
        {errors.password && <div>{errors.password}</div>}
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
