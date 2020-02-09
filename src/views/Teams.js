import React from "react";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import { CardColumns, Container, Row } from "react-bootstrap";
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

const Teams = () => {
  return (
    <StyledWrapper>
      <Container>
        <Row>
          <CardColumns>
            <Card>
              <Card.Body>
                <Card.Title>12U Teams</Card.Title>
                <Card.Text>
                  There are no team entries so far
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>11U Teams</Card.Title>
                <Card.Text>
                  There are no team entries so far
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>10U Teams</Card.Title>
                <Card.Text>
                  There are no team entries so far
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>10U Teams</Card.Title>
                <Card.Text>
                  There are no team entries so far
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>10U Teams</Card.Title>
                <Card.Text>
                  There are no team entries so far
                </Card.Text>
              </Card.Body>
            </Card>
          </CardColumns>
        </Row>
        <Row></Row>
      </Container>
    </StyledWrapper>
  );
};

export default Teams;
