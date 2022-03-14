import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
const Login = () => {
  const router = useRouter();
  const login = async () => {
    try {
      const res = await axios.post('/api/login');
      if (res.status === 200) {
        //로그인 성공
        router.push('/admin');
      }
    } catch {}
  };
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">Well never share your email with anyone else.</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" onClick={login}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
