import React from "react";
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo.png';

const LogoWrapper = styled.div`
  position: relative;
  z-index:99;
  text-align: center;
  padding: 2em 0;
  font-size: 2em;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed',sans-serif;
img {
  position: relative;
  z-index:99;
  padding: 5px;
  vertical-align: middle; 
  margin-right: 30px;
  width: 80px;
}
.bar{
  position: relative;
  z-index:99;
    text-align: center;
    border-top: solid 5px #111441;
    top: 1.2em;
    z-index: -99;
}
.logo{
  background-color:#f5f5f5;
}
`;

const StyledWrapper = styled.div`
.myNavs{
  padding-top:5px;
  border-bottom: 0px;
}

.mynav{
  text-align: center;
  width: 150px;
  height: 50px;
  vertical-align: middle;
}

.mylink{
  text-align: center;
  width: 150px;
  height: 50px;
  vertical-align: middle;
  color:#111441;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed',sans-serif;
}

.nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
  top: 3px;
  color: white;
  background-color: #111441;
  border-color: #dee2e6 #dee2e6 #fff;
  font-size:17px;
  transition: all 0.2s;
}

.nav-tabs .nav-link:focus, .nav-tabs .nav-link:hover{
  color: white;
  background-color: #111441;
  border-color: #dee2e6 #dee2e6 #fff;
  transition: all 0.2s;
  font-size:17px;
}
`;

const Toolbar = () => {
  return (
    <StyledWrapper>
      <Nav className="justify-content-center myNavs" variant="tabs">
        <Nav.Item className="mynav">
          <Nav.Link className="mylink" as={NavLink} exact to="/">
            Home
        </Nav.Link>
        </Nav.Item>
        <Nav.Item className="mynav">
          <Nav.Link className="mylink" as={NavLink} to="/teams">
            Teams
        </Nav.Link>
        </Nav.Item>
        <Nav.Item className="mynav">
          <Nav.Link className="mylink" as={NavLink} to="/gallery">
            Gallery
        </Nav.Link>
        </Nav.Item>
        <Nav.Item className="mynav">
          <Nav.Link className="mylink" as={NavLink} to="/about">
            About
        </Nav.Link>
        </Nav.Item>
        <Nav.Item className="mynav">
          <Nav.Link className="mylink" as={NavLink} to="/contact">
            Contact
        </Nav.Link>
        </Nav.Item>
      </Nav >
      <LogoWrapper>
        <div className="bar"></div>
        <Container className="logo">
          <img src={logo} />
          <span>Charlotte Colts Baseball</span>
        </Container>
      </LogoWrapper>

    </StyledWrapper>
  );
};

export default Toolbar;