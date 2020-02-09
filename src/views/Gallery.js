import React from "react";
import styled from 'styled-components';

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

const Gallery = () => {
  return (
    <StyledWrapper>
      <div>
        <p> hi </p>
      </div>
    </StyledWrapper>
  );
};

export default Gallery;