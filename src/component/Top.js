import { useRouter } from 'next/router';
import Link from 'next/link';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
export default function Top() {
  const router = useRouter();
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand
          onClick={() => {
            router.push('/');
          }}
        >
          Next.js
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                router.push('/');
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                router.push('/about');
              }}
            >
              About
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                router.push('/admin');
              }}
            >
              Admin
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
