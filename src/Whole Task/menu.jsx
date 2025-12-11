import React from 'react'
import {  Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {Modal,Offcanvas,ListGroup,Badge} from 'react-bootstrap';
import { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './whole.css'

import img1 from '../image/pizza1.jpg'
import img2 from '../image/pizza2.jpg'
import img3 from '../image/pizza3.jpg'

export default function Home() {

  const container=[
    {pic:img1,heading:'Chicken Pizza',text:'Cheesy,hot and fresh - frab your slice'},
     {pic:img2,heading:'Over Chees Pizza',text:'Cheesy,hot and fresh - frab your slice'},
      {pic:img3,heading:'Veg Pizza With Extra Chees',text:'Cheesy,hot and fresh - frab your slice'}
  ]

  const[head,setHead]=useState(false);
      const clickShow=()=>setHead(true);
      const clickOff=()=>setHead(false);

   const[come,setCome]=useState(false);
  
    const handleClose=()=>setCome(false);
    const handleOpen=()=>setCome(true);

    const showAlert = () => {
    alert("Your Order Will Ready Now!" );
    setCome(false)
  };

  return (
    <div className='first'>
      <Navbar className='nav-bg' expand='lg' >
        <Navbar.Brand className='title heading'>🍕Pizza Shop</Navbar.Brand>

        <Navbar.Toggle aria-controls='basic-navbar-nav' className='nav-toggle' />

        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='heading-links'>
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/menu'>Menu</Nav.Link>
            <Nav.Link as={Link} to='/order'>Order</Nav.Link>
            <Nav.Link as={Link} to='/comments'>Comments</Nav.Link>
            <Nav.Link as={Link} to='/picoftheweek'>Pickoftheweek</Nav.Link>

            <i class="bi bi-cart4 heading-icon" onClick={clickShow}></i>

          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div>
            <h4 className='menu-headings'>Treat yourself with our Everyday Menu</h4>
      </div>
      <div className='d flex'>
      <div className='col' >
         {container.map((value,index)=>(
          <div key={index} >
          
            <div className='border  mt-5' style={{width:'350px',borderRadius:'10px',boxShadow:'box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
            <img src={value.pic}  class="card-img-top" />
            <h5 className='mt-1 card-heading ms-2'>{value.heading}</h5>
            <p className='card-text ms-2'>{value.text}</p>
            <div className='d-flex'>
            <p className='ms-4'> now!</p><button className='btn bg-primary mb-3 ms-5 text-white ' onClick={handleOpen} >Order Now</button>
            </div>
       
            </div>
          </div>
         ))}
      </div>
      </div>
      <Modal  show={come}>
    <Modal.Header>
      <Modal.Title>
        Pizza Details<i onClick={handleClose} className="bi bi-x" style={{paddingLeft:'300px'}}></i>
      </Modal.Title>
       </Modal.Header>
      <Modal.Body>
<img src={img1} width={150} height={100} style={{marginLeft:'150px'}}/>
       <p className='mt-4' style={{textAlign:'center'}}>Pizza is an Italian, specifically Neapolitan, dish typically consisting of a flat base of leavened wheat-based dough topped with tomato, cheese, and other ingredients, baked at a high temperature, traditionally in a wood-fired oven.</p>
        
      </Modal.Body>
      <Modal.Footer >
        <button onClick={handleClose} className='btn bg-dark text-white'>Close</button>
        <button onClick={showAlert}  className='btn bg-success text-white' >Order Now</button>
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
        </Offcanvas.Body>
      </Offcanvas>

  <div>
        <hr className='last-line' />
        <p className='first-footer'>Copyright 2024-2035</p>
      </div>
    
    </div>

     
  )
}
