import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
`;
const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const StyledLeft = styled.div`
  flex: 1;
  position: sticky;
  top: 3rem;
  font-size: 12rem;
  display: flex;
  justify-content: center;
  font-weight: 700;
  align-self: flex-start;
  font-family: 'Josefin Sans', sans-serif;
  @media screen and (max-width: 768px) {
    position: static;
    justify-self: flex-start;
    flex: auto;
    font-size: var(--size-large);
    margin-bottom: 1rem;
  }
`;
const StyledRight = styled.div`
  flex: 2;
  display: flex;
  border-top: 3px solid ${props => props.theme.colorText};
  padding-top: 2rem;
  position: relative;
  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    justify-self: flex-start;
    flex: auto;
  }
`;
const StyledRightLeft = styled.div`
  flex: 1;
  font-size: var(--size-large);
  font-weight: 700;
  font-family: 'Josefin Sans', sans-serif;
  position: sticky;
  top: 4rem;
  align-self: flex-start;
  @media screen and (max-width: 992px) {
    position: static;
    margin-bottom: 2rem;
  }
`;
const StyledRightRight = styled.div`
  flex: 2;
  padding-left: 2rem;
  font-size: var(--size-medium);
  @media screen and (max-width: 992px) {
    padding-left: 0;
  }
  @media screen and (max-width: 768px) {
    font-size: var(--size-small);
  }
`;

const createMarkup = (text) => {
  return {__html: text};
};

const Section = ({children, number, title}) => {
  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledLeft>
          {number}
        </StyledLeft>
        <StyledRight>
          <StyledRightLeft>
            {title}
          </StyledRightLeft>
          <StyledRightRight>
            <div dangerouslySetInnerHTML={createMarkup(children)} />
          </StyledRightRight>
        </StyledRight>
      </StyledContainer>
    </StyledWrapper>
  );
};

export default Section;