import { hover } from '@testing-library/user-event/dist/hover';
import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
// import styles from './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Send the username and password to the server
  };
  const handleForgotPassword = () => {
    // TODO: Send the user's email address to the server
  };
  return (
    <Container fluid className='login-container pt-5 mt-5'>
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
