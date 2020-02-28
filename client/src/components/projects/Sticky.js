import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  position: sticky;
  top: 10%;
  -webkit-text-stroke: 1px ${props => props.theme.colorText};
  @media screen and (max-width: 992px) {
    display: none;
  }
`;
const StyledSticky = styled.div`
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
  text-overflow: "";
  width: 130%;
  margin-left: -15%;
  justify-self: flex-start;
  color: transparent;
  font-size: 12vw;
  font-family: "Josefin Sans", Helvetica, sans-serif;
  div {
    white-space: nowrap;
  }
`;
const Sticky = ({title}) => {
  return (
    <StyledWrapper>
      <StyledSticky>
      {`${title} ${title} ${title} ${title} ${title} ${title}`}
      </StyledSticky>
    </StyledWrapper>
  );
};

export default React.memo(Sticky);