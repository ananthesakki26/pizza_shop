// import React from 'react'
import React, {useState} from 'react'
import { Badge, Nav, Navbar,Offcanvas,ListGroup} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './whole.css'

export default function Order() {
  const[head,setHead]=useState(false);
    const clickShow=()=>setHead(true);
    const clickOff=()=>setHead(false)
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

      <div>
        
        <h6 className='para-h6'>1. Chicken Pizza</h6><Badge pill className='badge'>3</Badge>
        
        <p className='order-paraMargine'>Your order will be ready.</p>
        <hr className='hr-design'/>
        <h6>2. Veg Pizza</h6>
          <Badge pill  className='badge'>1</Badge>
        <p className='order-paraMargine'>Your order will be ready.</p>
        <hr className='hr-design'/>
        <h6>3. Veg pizza  with extra chees</h6>
          <Badge pill  className='badge'>2</Badge>
        <p className='order-paraMargine'>Your order will be ready.</p>
        <hr className='hr-design'/>
         <p className='first-footer'>Copyright 2024-2035</p>
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
