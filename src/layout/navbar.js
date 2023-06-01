

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../imgs/logo.svg"
import { Link } from 'react-router-dom';
function NavComponent() {
  return (
    <Navbar  expand="lg" className='navbar'  fixed="top">
      <Container fluid>
        <Navbar.Brand href="#"><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='justify-content-end'>
          <Nav
            className="my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >

            <Link className='nav-link fw-bold  text-center  ' to ="/"> Home</Link>
            <Link className='nav-link  fw-bold text-center '  to ="/products"> Products</Link>
            <Link className='nav-link  fw-bold  text-center' to ="/"> About us</Link>
        
          </Nav>
          <div className='ms-5' >
            <Link to='/login'>
            <Button className='me-4 btn'>Log in</Button>

            </Link>
            <Button > sign up  </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavComponent;