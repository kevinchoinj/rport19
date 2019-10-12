import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  height: 18rem;
  background-color: #fff;
  font-size: var(--size-small);
  letter-spacing: 0px;
  word-wrap: break-word;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: ${props => props.theme.colorBackground};
  @media screen and (max-width: 992px) {
    height: 22rem;
    flex-direction: column;
  }
`;
const StyledBody = styled.div`
  width: 640px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Josefin Sans', Helvetica, sans-serif;
  line-height: 140%;
  @media screen and (max-width: 992px) {
    width: 100%;
    padding: 0px 1rem;
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

export default About;