import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink,Link } from 'react-router-dom';
import styled from 'styled-components'
import './NavBar.css'
const NavBar = () => {
  return (
    <div>
 <Navbar  expand="lg" className='Navss fixed-top'>
      <Container>
        <Navbar.Brand className="pushes">
          <Link to='/' style={{'textDecoration':'none'}}>
          <div className='logoname '>
          OnewayTemplate<span className="dots">.</span>
            </div>
          </Link>

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-light Toggg'/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <StyledLink to='./' className=' mx-3 '> Home</StyledLink>
         
     <StyledLink2 to='/free'  className=' mx-3 '>Free Template <div ></div> </StyledLink2>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar
const StyledLink = styled(NavLink)`
font-size: 20px;
 font-weight: 600; 
 cursor: pointer;
 font-family: 'Work Sans', sans-serif;
 text-decoration: none;
 color: #6F6E79;
     &.active {
      /* background-color:  #FFB62A; */
          color: #ffffff;
  }
`
const StyledLink2 = styled(NavLink)`
font-size: 20px;
 font-weight: 600; 
 
 width: 200px;
 cursor: pointer;
 font-family: 'Work Sans', sans-serif;
 text-decoration: none !important;
 color: #ffffff;
     &.active {
    div{
      width: 140px;
      height:6px;
      background-color:#FFB62A;
    }
      height:10px;
    
          color: #ffffff;
  }
`
