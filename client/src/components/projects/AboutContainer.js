import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  background-color: rgba(255, 255, 255, .8);
  font-size: var(--size-medium);
  padding: 3rem 0;
  letter-spacing: 0px;
  word-wrap: break-word;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  color: ${props => props.theme.colorBackground};
  @media screen and (max-width: 768px) {
    font-size: var(--size-small);
  }
`;
const StyledBody = styled.div`
  margin: 2rem 1rem 2rem 6rem;
  width: 50%;
  max-width: 1240px;
  text-align: left;
  line-height: 130%;
  @media screen and (max-width: 992px) {
    width: 100%;
    padding: 2rem 1rem;
    margin: 0;
    box-sizing: border-box;
  }
`;


const About = ({ title, children }) => {
  return (
    <StyledWrapper>
      <StyledBody>
        {children}
      </StyledBody>
    </StyledWrapper>
  );
};

export default React.memo(About);