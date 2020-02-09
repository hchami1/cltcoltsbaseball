import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

const StyledWrapper = styled.div`
padding: 1.1em 0px;
  background-color:#111441;
  color:whitesmoke;
  vertical-align: baseline;
  text-align: center;
  .text{
    font-size:10px;
    color: whitesmoke;
    font-family: 'Open Sans Condensed',sans-serif;
    text-align: center;
    vertical-align: baseline;
  }
  i{
    color:white;
  }
`;

const Footer = () => (
  <footer>
    <StyledWrapper>
      <Container>
        <p className="text">© 2020 Copyright CltColtsBaseball.com The Home of the Charlotte Colts Baseball Team. All rights reserved.</p>
      </Container>
    </StyledWrapper>
  </footer>
);

export default Footer;