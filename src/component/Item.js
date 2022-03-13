import React from 'react';
import Image from 'next/image';
import { Button, Container, Row, Col } from 'react-bootstrap';
const Item = ({ item }) => {
  return (
    <Container>
      <Row>
        {/* <Image src={item.image_link} alt={item.name} width={500} height={500} /> */}
        <Col md={6}>
          <img src={item.image_link} alt={item.name} />
        </Col>
        <Col className="mt-5" md={6}>
          <h3>{item.name}</h3>
          <strong>{item.price} $</strong>
          <p>{item.brand}</p>
          <Button variant="success" className="mt-3">
            구매하기
          </Button>
        </Col>
      </Row>

      <hr />

      <Row>
        <p>{item.description}</p>
      </Row>

      <hr />
    </Container>
  );
};

export default Item;
