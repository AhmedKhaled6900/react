import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Loader from './layout/loader';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Validate the username and password
    if (username === '' || password === '') {
      alert('Please enter a username and password');
      return;
    }

    if (password !== confirmPassword) {
      alert('The passwords do not match');
      return;
    }

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    setIsLoggedIn(true);
    window.location.href = '/';
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <Form className='form' onSubmit={handleSubmit}>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
           
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
          
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="confirmPassword"
    
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>
        <Button type="submit">Sign Up</Button>
      </Form>
      {isLoggedIn && (
 <Loader></Loader>
      )}
    </div>
  );
};

export default SignUp;
