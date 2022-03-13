import Link from 'next/link';
import { Card, Row, Col, Container } from 'react-bootstrap';
import styles from './ItemList.module.css';

export default function ItemList({ item }) {
  return (
    <Row xs={1} md={3} className="g-5 mt-5">
      {item.map((it, i) => {
        return (
          <Link href={`/detail/${it.id}`} key={it.id}>
            <a className={styles.a}>
              <Col className={styles.wrap}>
                <Card.Img variant="top" src={it.image_link} className={styles.img_title} />
                <Card.Body>
                  <Card.Title>{it.name}</Card.Title>
                  <Card.Text className={styles.brand}>{it.brand} </Card.Text>
                  <Card.Text className={styles.price}>{it.price} $</Card.Text>
                </Card.Body>
              </Col>
            </a>
          </Link>
        );
      })}
    </Row>
  );
}
