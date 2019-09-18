import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  background-color: #fff;
  font-size: var(--size-small);
  letter-spacing: 0px;
  word-wrap: break-word;
  display: flex;
  flex-direction: row;
  padding: var(--size-spacing-large) 0px;
  color: ${props => props.theme.colorBackground};
  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;
const StyledTitle = styled.div`
  position: relative;
  min-height: 1px;
  margin-left: 16.66666667%;
  width: 33.33333333%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-size: var(--size-xlarge);
  font-family: 'Josefin Sans', Helvetica, sans-serif;
  cursor: default;
  @media screen and (max-width: 992px) {
    width: 100%;
    padding: 0px 1rem;
    margin: 0;
    box-sizing: border-box;
  }
`;
const StyledBreak = styled.div`
  flex-basis: 100%;
  width: 0px;
  height: 0px;
  overflow: hidden;
`;
const StyledLetter = styled.div`
  transition: none;
  &:hover {
    color: transparent;
    -webkit-text-stroke: 1px #000;
  }
`;
const StyledBody = styled.div`
  width: 33.33333333%;
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
      <StyledTitle>
        {title && title.split('').map((value, key) => {
          if (value === ' ') {
            return (
              <StyledBreak key={key}/>
            );
          }
          else {
            return (
              <StyledLetter key={key}>
                {value}
              </StyledLetter>
            );
          }
        })}
      </StyledTitle>
      <StyledBody>
        {children}
      </StyledBody>
    </StyledWrapper>
  );
};

export default About;