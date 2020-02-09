import React from "react";
import styled from 'styled-components';

const LogoWrapper = styled.div`
padding: 2em;
h2 {
   width: 100%; 
   text-align: center; 
   border-bottom: 1px solid #000; 
   line-height: 0.1em;
   margin: 10px 0 20px;
} 

h2 span { 
    background:#f5f5f5; 
    padding:0 30px; 
}

img {
  position: relative;
  vertical-align: middle; 
  margin-right: 30px;
  width: 80px;
}
`;

const TextLine = ({text}) => {
  return (
    <LogoWrapper>
      <h2><span>{text}</span></h2>
    </LogoWrapper>
  );
};

export default TextLine;