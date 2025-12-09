import React, { useState } from 'react'
import { Badge, Button, ListGroup, Modal, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './whole.css'

import img11 from '../image/pizza2.jpg';

export default function Pickoftheweek() {

  const[head,setHead]=useState(false);
  const clickShow=()=>setHead(true);
  const clickOff=()=>setHead(false)

  const clickAlert=()=>{
    alert("Your order is ready!")
    setHead(false)
  }

  const[come,setCome]=useState(false);
    
      const handleClose=()=>setCome(false);
      const handleOpen=()=>setCome(true);

  return (
    <div>
      <Navbar className='nav-bg'  expand='lg'>
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

      <p className='last-p text-primary 'style={{fontSize:'40px',textAlign:'center',marginTop:'50px'}}>
        Pick of the Week!</p>
      <div>
        <div className='d-flex mt-5' >
          <img src={img11} width={400} height={200} style={{marginLeft:'110px'}} />
          <div style={{marginLeft:'200px',}}>
            <h2 >Double Cheese Pizza</h2>
            <p>Double Cheese Pizza is a classic favorite that’s<br/>
             loaded with extra cheese for a rich, creamy, and <br/>
             indulgent taste. It features a soft crust, flavorful tomato <br/>
             sauce, and a generous double layer of gooey melted cheese, making<br/>
              it perfect for true cheese lovers. 🧀🍕</p>
              <Button className='btn btn-primary' onClick={handleOpen}>Buy Now</Button>
          </div>
        </div>
      </div>

      <Modal show={come} style={{marginLeft:'860px',marginTop:'200px',width:'400px'}}>
        <Modal.Body>
          <div>
            
          <img src={img11} width={'300px'}height={'200px'}/>
          <p >item added to cart</p>

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>

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
          <Button className='btn btn-primary w-5 mt-2 button'onClick={clickAlert}>Check Out</Button>
        </Offcanvas.Body>
        
      </Offcanvas>
       <div>
        <hr className='last-line' />
        <p className='first-footer'>Copyright 2024-2035</p>
      </div>
    </div>
  )
}
