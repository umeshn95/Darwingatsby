// LoginForm.js
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios'
// Styled components
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 400px;
  margin: auto;
`;

const StyledInput = styled.input`
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
`;

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: none;
  background-color: #001AEF;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0000d1;
  }
`;

function LoginForm() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle login logic here

    try {
      // Replace with your API endpoint
      const response = await axios.post('https://contactapi-for-darwin.onrender.com/api/login', loginData);
      
      if (response.data.success) {
        console.log('Login successful:', response.data);
        // Handle successful login, e.g., redirect to a dashboard, store the token, etc.
      } else {
        console.log('Login failed:', response.data.message);
        // Handle failed login, e.g., display an error message to the user
      }
    } catch (error) {
      console.error('Login error:', error);
      // Handle server errors, e.g., show a notification to the user
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type="email"
        name="email"
        placeholder="Email"
        value={loginData.email}
        onChange={handleInputChange}
      />
      <StyledInput
        type="password"
        name="password"
        placeholder="Password"
        value={loginData.password}
        onChange={handleInputChange}
      />
      <StyledButton type="submit">Log In</StyledButton>
    </StyledForm>
  );
}

export default LoginForm;
