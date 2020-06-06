import React from 'react';
import styled from 'styled-components';
import ContactWrapper from 'menu9/ContactWrapper';

const StyledWrapper = styled.div`
  padding: 50px;
  color: ${props => props.theme.topRightText};
  opacity: 1;
  font-size: var(--size-smallest);
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
  font-size: var(--size-small);
  letter-spacing: 3px;
  color: ${props => props.theme.topRightText};
  margin-bottom: 2rem;
  cursor: default;
  display: flex;
  width: 100%;
  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;
const DetailsWrapper = styled.div`
  margin: 0 0 2rem 0;
  line-height: 140%;
  font-family: 'Josefin Sans', sans-serif;
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
          B.Sc Computer Science
          <br/>
          Rensselaer Polytechnic Institute
          <br/><br/>
          Cloud Elements
          <br/>
          Dallas, TX
        </DetailsWrapper>
        </div>
      <ContactWrapper/>
    </StyledWrapper>
  );
};

export default TopRightDisplay;