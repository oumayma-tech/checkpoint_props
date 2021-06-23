import React from 'react'
import {Navbar,Nav,Button,Form,FormControl} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function Com() {
    return (
        <div>
            <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form className="Forminline">
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button className="mr-sm-2" variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  <br />
  
  
</>

        </div>
    )
}

export default Com
