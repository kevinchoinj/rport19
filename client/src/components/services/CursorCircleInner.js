import React, {
  memo,
} from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  height: 5rem;
  width: 5rem;
  border-radius: 2.5rem;
  position: fixed;
  top: -2.5rem;
  left: -2.5rem;
  opacity: .8;
  background-color: rgba(216, 178, 216, .1);
  border: 1px solid rgba(216, 178, 216, .9);
  pointer-events: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const CursorCircle = ({imageValues}) => {
  return(
    <StyledWrapper style={{
      transform: `translate(${imageValues.x}px, ${imageValues.y}px)`
    }}/>
  );
};

export default memo(CursorCircle);
