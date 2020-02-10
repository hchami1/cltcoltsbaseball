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
            Charlotte Colts Baseball is designed for those athletes who, in addition to participating in regular Spring and Fall seasons, want to experience extra baseball in more competitive tournament environment. Our goal is to provide a local, cost-effective alternative to travel or academy baseball.
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
        <TextLine text={"Time Commitment"} />
        <Row>
          <CardDeck>
            <Card>
              <Card.Body>
                <Card.Title>Spring</Card.Title>
                <Card.Text>
                  In order to avoid conflicts with players regular season teams, Charlotte Colts teams will typically practice on Sunday afternoons. Tournament games will take place on select Saturdays and/or Sundays throughout the Spring.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Fall</Card.Title>
                <Card.Text>
                  Program teams may practice more frequently than the Spring (possible weekday practices) based on player availability. Tournament games will take place on select Saturdays and/or Sundays during the Fall. Older age groups typically play one out-of-town tournament in the Fall. We understand that many kids play sports other than baseball in the Fall (and we encourage that!), and coaches will do their best to coordinate practices and games that meet the best needs of the team.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Winter</Card.Title>
                <Card.Text>Colts Baseball is committed to the long-term development of its players and believes that offseason training is important to fine tune basic skills and prepare teams to play early in the Spring season prior to players regular season commitments. Weekly indoor sessions (and outdoor when possible) will be held in [Dec/Jan/Feb], focusing on core fundamentals and conditioning in order to prepare players for the coming season.</Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Row>
        <TextLine text={"Expectations"} />
        <Row>
          <p className="text">
            Each coaching staff will emphasize proper baseball development for each age group through planned practice sessions to ensure player and position development. We do not believe that youth baseball players should focus solely on one position. Players who possess the ability to play multiple positions stand the greatest chance of success in middle school and beyond. Coaches will focus on proper fundamentals and are encouraged to apply a fairness standard when allocating playing time for all participants. Fair playing time is not the same as equal playing time. There are no minimum play rules in the tournaments the Colts program [participates in]. Parents who believe that the most important parts of a youth baseball experience are equal playing time and equal opportunities to play a variety of positions should not consider Colts Baseball as an option for their child.
              </p>
        </Row>
      </Container>
    </StyledWrapper>
  );
};

export default About;
