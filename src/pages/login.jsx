// LoginPage.jsx
import React, { useState } from 'react';
import './login.css';
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

const LoginPage = () => {
  const users = useQuery(api.user.get);

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    users.map(user => {
      if(user.uname === formData.username && user.pswd === formData.password) {
        window.location = 'http://localhost:3000/dashboard';
      }
    })
  };

  return (
    <div className="login-container" style={{width: '20%'}}>
      <h2>Login</h2>
      <br/>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            placeholder='Username'
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder='Password'
          />
        </div>
        <br/>
        <br/>
        <button type="submit">Login</button>
        <br/>
        <div>Not a user? Creat New account <a href='http://localhost:3000/signup'>Register</a></div>
      </form>
    </div>
  );
};

export default LoginPage;
