import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './all.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logoc from '../logoc.png'
import Button from 'react-bootstrap/Button';

function ColorSchemesExample() {
  return (
    <>
    
      
      <Navbar >
        <Container>
        <Navbar.Brand href="#home">
            <img
              src={logoc}
             
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>          <Nav className=" justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Manu">Manu</Nav.Link>
            <Nav.Link href="#RESERVATION">RESERVATION</Nav.Link>
            <Nav.Link href="#Shop">Shop</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
           <Button className="bu">Book Now</Button>

          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;