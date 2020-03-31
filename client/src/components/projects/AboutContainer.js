import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  background-color: #fff;
  font-size: 3rem;
  padding: 3rem 0;
  letter-spacing: 0px;
  word-wrap: break-word;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  color: ${props => props.theme.colorBackground};
  @media screen and (max-width: 992px) {
    flex-direction: column;
    font-size: 1.5rem;
  }
`;
const StyledBody = styled.div`
  margin: 2rem 1rem;
  width: 80%;
  max-width: 1240px;
  text-align: left;
  font-family: 'Josefin Sans', Helvetica, sans-serif;
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