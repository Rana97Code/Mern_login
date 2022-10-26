import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import style from './dash.css';


const Dashboard = ()=> {
    return (
        <Navbar  bg="light" expand="lg">
            <Container className='cont'>
                    
                    <Nav.Link href="/home" className="nav-item">Home</Nav.Link>
                    <Nav.Link href="#action2" className="nav-item">Link</Nav.Link>
                    <Nav.Link href="/Login" className="log nav-item"> Sign In</Nav.Link>
                    
              
                <Form className="d-flex">
                    <Form.Control type="search" placeholder="Search"  className="me-2" aria-label="Search"/>
                    <Button variant="outline-success">Search</Button>
                </Form>
                
            </Container>
        </Navbar>
  
        );
  }
  
  export default Dashboard;