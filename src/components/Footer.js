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
  .copyright{
    font-size:10px;
    color: whitesmoke;
    font-family: 'Open Sans Condensed',sans-serif;
    text-align: center;
    vertical-align: baseline;
  }
  a,p{
    color:whitesmoke;
    font-size:12px;
    font-family: 'Open Sans Condensed',sans-serif;
    text-align: center;
    vertical-align: baseline;
  }
`;

const Footer = () => (
  <footer>
    <StyledWrapper>
      <Container>
        <Row>
          <Col>
            <p>Contact us via email at: <a href="mailto:admin@cltcoltsbaseball.com">admin@cltcoltsbaseball.com</a></p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="copyright">Copyright © 2020 CltColtsBaseball.com The Home of Charlotte Colts Baseball. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </StyledWrapper>
  </footer>
);

export default Footer;