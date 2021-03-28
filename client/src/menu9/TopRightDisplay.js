import React from 'react';
import styled from 'styled-components';
import ContactWrapper from 'menu9/ContactWrapper';

const StyledWrapper = styled.div`
  padding: 42px 48px;
  color: ${props => props.theme.topRightText};
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  box-sizing: border-box;
  @media screen and (max-width: 992px) {
    padding: 50px 100px 50px 25px;
  }
`;
const TitleWrapper = styled.div`
  letter-spacing: 3px;
  color: ${props => props.theme.topRightText};
  >div:nth-child(2) {
    color: ${props => props.theme.colorTheme};
  }
  margin-bottom: 1rem;
  cursor: default;
  display: flex;
  width: 100%;
  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
  @media screen and (max-height: 840px) {
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 1100px) {
    margin-bottom: 1rem;
  }
`;
const DetailsWrapper = styled.div`
  margin: 0 0 1rem 0;
  font-size: 1rem;
  line-height: 1.8rem;
  font-family: 'Josefin Sans', sans-serif;
  @media screen and (max-height: 840px) {
    font-size: .8rem;
    line-height: 1.5rem;
    margin: 0 0 1rem 0;
  }
  @media screen and (max-height: 730px) {
    display: none;
  }
  @media screen and (max-width: 1100px) {
    font-size: .8rem;
    line-height: 1.5rem;
    margin: 0 0 1rem 0;
  }
  @media screen and (max-width: 992px) {
    display: none;
  }
`;

const TopRightDisplay = () => {
  return (
    <StyledWrapper>
      <div>
        <TitleWrapper>
          <div>K E V I N</div>&nbsp;
          <div>C H O I</div>
        </TitleWrapper>
        <DetailsWrapper>
          2008 - Rank 8 globally WoW <br/>
          2010 - Top 1% LoL/SC2 <br/>
          2013 - HTML/CSS/PHP<br/>
          2014 - B.Sc Computer Science @ RPI<br/>
          2015 - Javascript/Ruby<br/>
          2016 - Frontend @ Why Not Smile<br/>
          2017 - Rank 19 NA HS Arena<br/>
          2017 - React/Node.js<br/>
          2019-2021 - Cloud-Elements<br/>
          2021 - 2nd @ TechCrunch Miami (Redact.dev)<br/>
          2017-now - Freelance (Shodyra)<br/>
          2020-now - Redact.dev<br/>
          2021-now - UiPath<br/>
        </DetailsWrapper>
      </div>
      <ContactWrapper/>
    </StyledWrapper>
  );
};

export default TopRightDisplay;