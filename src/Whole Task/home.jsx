import React from 'react'
import { Carousel, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './whole.css'
import pic1 from "../image/pizza1.jpg"
import pic2 from '../image/pizza2.jpg'
import pic3 from '../image/pizza3.jpg'


export default function Home() {
  return (
    <div className='first'>
      <Navbar className='nav-bg' expand='lg' >
        <Navbar.Brand className='title heading'>🍕Pizza Shop</Navbar.Brand>

         <Navbar.Toggle aria-controls='basic-navbar-nav' className='nav-toggle'/>

          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='heading-links'>
                <Nav.Link  as={Link} to='/'>Home</Nav.Link>
                 <Nav.Link as={Link} to='/menu'>Menu</Nav.Link>
                  <Nav.Link as={Link} to='/order'>Order</Nav.Link>
                   <Nav.Link as={Link} to='/comments'>Comments</Nav.Link>
                    <Nav.Link as={Link} to='picoftheweek'>Pickoftheweek</Nav.Link>

                    <i class="bi bi-cart4 heading-icon"></i>

            </Nav>
          </Navbar.Collapse>
      </Navbar>
      <div className='bg-dark'>
        <Carousel>
            <Carousel.Item >
                <img className='pic-all' src={pic1}/>
                <Carousel.Caption>
                   <h5 className='pizza-caption'>Chicken Pizza</h5>
                  </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className='pic-all' src={pic2}/>
                <Carousel.Caption>
                          <h5 className='pizza-caption'>Over Chees Pizza</h5>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className='pic-all' src={pic3}/>
                <Carousel.Caption>
                             <h5 className='pizza-caption'>Veg Pizza with Extra Chees</h5>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
      </div>

      <div>
        <hr className='last-line' />
        <p className='first-footer'>Copyright 2024-2035</p>
      </div>
    </div>
  )
}
