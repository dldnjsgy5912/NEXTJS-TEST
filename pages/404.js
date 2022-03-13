import React from 'react';
import { Spinner, Container } from 'react-bootstrap';
const Error404 = () => {
  return (
    <div>
      <Spinner animation="grow" variant="danger" />
      <h1> 404 에러입니다.</h1>
    </div>
  );
};

export default Error404;
