import React from "react";
import styled from "styled-components";
import { Container, Row, CardColumns, Card, CardDeck } from "react-bootstrap";
import TextLine from "../components/TextLine";

const StyledWrapper = styled.div`
  min-height: 65vh;
  padding-bottom: 1em;
  .text {
    line-height: 2;
    color: #111441;
    font-family: "Open Sans Condensed", sans-serif;
    text-align: justify;
  }
`;

const HorizontalLine = styled.hr`
  padding: 2em 0px;
`;

const About = () => {
  return (
    <StyledWrapper>
      <Container>
        <TextLine text={"About Us"}></TextLine>
        <Row>
          <p className="text">
            Charlotte Colts Baseball is designed for those athletes who, in
            addition to participating in regular Spring and Fall seasons, want
            to experience extra baseball in more competitive tournament
            environment. Our goal is to provide a local, cost-effective
            alternative to travel or academy baseball.
          </p>
        </Row>
        <Row>
          <CardDeck>
            <Card>
              <Card.Body>
                <Card.Title>Cost</Card.Title>
                <Card.Text>
                  Cost per season is dependent on a number of factors, including
                  the number of tournaments played, out-of-town travel, uniform
                  needs and frequency of offseason training. Typical costs for a
                  season (Spring or Fall) are $125-$250.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Tryouts</Card.Title>
                <Card.Text>
                  Tryouts for the Spring season will typically take place in
                  early February. Tryouts for the Fall season are generally held
                  in late August. Tryout dates will be announced as we move
                  closer to those time periods.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Facilities</Card.Title>
                <Card.Text>Teams will practice at Randolph Park.</Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Row>
        <HorizontalLine />
        <Row>
          <h3>Time Commitment</h3>
        </Row>
      </Container>
    </StyledWrapper>
  );
};

export default About;
