import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import TextLine from "../components/TextLine";
import { Button } from "react-bootstrap";

const StyledWrapper = styled.div`
min-height:65vh;
padding-bottom: 1em;
.text{
  line-height: 2;
  color: #111441;
  font-family: 'Open Sans Condensed',sans-serif;
  text-align: justify;
}
`;

const StyledButton = styled.div`
  width:100%;
  text-align:center;
  padding: 1.5em 0px;
`;

const Home = () => {
  return (
    <StyledWrapper>
      <Container>
        <Row>
          <p className="text">Charlotte Colts Baseball offers players age 8 to 12 the opportunity to play competitive, tournament baseball in the Charlotte area.
          The program is intended for highly skilled and motivated players that are looking for advanced competition, more playtime, and more exposure.
          Teams will play in tournaments hosted by USSSA, Top Gun and Carolina Challenge Baseball League, depending on age and competitiveness of each program team.
          Charlotte Colts Baseball has an exclusive partnership with Myers Park Trinity Little League (MPTLL).
          Those interested in trying out for the Colts program must play on an MPTLL regular season team in the Spring.</p>
        </Row>
        <TextLine text={"Why Tryout?"} />
        <Row>
          <Col>
            <h3 className="text">Increased competition</h3>
            <p className="text">Charlotte Colts Baseball is designed for those athletes who, in addition to participating in regular Spring and Fall seasons, want to experience extra baseball in more competitive tournament environment.</p>
          </Col>
          <Col>
            <h3 className="text">Cost-Effective</h3>
            <p className="text">Our goal is to provide a local, cost-effective alternative to travel or academy baseball. Generally fees vary from $150 to $375 per season.</p>
          </Col>
          <Col>
            <h3 className="text">Develop Your Skills</h3>
            <p className="text">Each coaching staff will emphasize proper baseball development for each age group through planned practice sessions to ensure player and position development.</p>
          </Col>
        </Row>
        <Row>
          <StyledButton>
            <Button variant="secondary">Find Out More Here</Button>
          </StyledButton>
        </Row>
      </Container>
    </StyledWrapper>
  );
};

export default Home;