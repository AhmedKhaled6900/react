import { hover } from '@testing-library/user-event/dist/hover';
import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
// import styles from './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Validate the username and password
    if (username === '' || password === '') {
      alert('Please enter a username and password');
      return;
    }

    if (localStorage.getItem('username') === username && localStorage.getItem('password') === password) {
      setIsLoggedIn(true);
      window.location.href = '/';
    } else {
      alert('Invalid username or password');
    }
  };
  const handleForgotPassword = () => {
    // TODO: Send the user's email address to the server
  };
  return (
    <Container fluid className='login-container pt-5 mt-5 animate__animated animate__fadeIn  --animate-duration: 2s'>
  
    <div>
      <h1 className='m-5'>Login</h1>
      <Form className='form' onSubmit={handleSubmit}>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            // placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group  controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            // placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group  >
        <Button className='mt-4' type="submit">Login</Button><br />
        <h5 style={{cursor:"pointer"}} className='mt-4' onClick={handleForgotPassword}>Forgot Password</h5>
      </Form>
    </div>
 
    </Container>

  );
};

export default Login;
