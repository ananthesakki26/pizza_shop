
import React, { useState } from 'react'
import { Button, Form, Nav, Navbar,Offcanvas,ListGroup,Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './whole.css'

export default function Comments() {

const[head,setHead]=useState(false);
  const clickShow=()=>setHead(true);
  const clickOff=()=>setHead(false);

  const handleClose=()=>setHead(false);

  const [inputs, setInputs] = useState([]);
  const handleClick = () => {
    setInputs([...inputs, '🎉 Thank you,! Your comment has been submitted.']); 
  };

  return (
    <div>
      <Navbar className='nav-bg' expand='lg'>
        <Navbar.Brand className='title heading'>🍕Pizza Shop</Navbar.Brand>

         <Navbar.Toggle aria-controls='basic-navbar-nav'/>

          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='heading-links'>
               <Nav.Link  as={Link} to='/'>Home</Nav.Link>
                                <Nav.Link as={Link} to='/menu'>Menu</Nav.Link>
                                 <Nav.Link as={Link} to='/order'>Order</Nav.Link>
                                  <Nav.Link as={Link} to='/comments'>Comments</Nav.Link>
                                   <Nav.Link as={Link} to='/picoftheweek'>Pickoftheweek</Nav.Link>

                   <i class="bi bi-cart4 heading-icon" onClick={clickShow}></i>

            </Nav>
          </Navbar.Collapse>
      </Navbar>

      <h2 className='comment-h1 text-primary'>Comments</h2>
      <div>
        {inputs.map((value, index) => (
          <div className='d-flex' >
              <Form.Control key={index} type='text' value={value} className='comment-control  bg-success  text-black p-3' 
              />
              <i onClick={handleClose} className="bi bi-x" style={{fontSize:'20px',marginLeft:'-25px',marginTop:'20px'}}></i>
           </div>
          ))}
        <Form className='comments-gap'> 
          
          <Form.Control className='comment-control' placeholder='Email address'/>
          <Form.Control className='comment-control' placeholder='Name'/>
          <Form.Control className='comment-controls' as={'textarea'} placeholder='Comments'/>
          <Button className='btn btn-primary comment-btn' onClick={handleClick} >Submit</Button>
        </Form>
      </div>


      <Offcanvas show={head} placement='end'>
        <Offcanvas.Header>
          Cart: <i  className="bi bi-x" style={{paddingLeft:'300px',fontSize:'30px'}} onClick={clickOff}></i>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup>
            <ListGroup.Item>
              <h5>1. Chicken Pizza</h5><Badge pill >3</Badge>
              <p>Cras justo odio</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>2. Cheese Pizza</h5><Badge pill>2</Badge>
              <p>Cras justo odio</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>3. Veg Pizza</h5><Badge pill>1</Badge>
              <p>Cras justo odio</p>
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}
