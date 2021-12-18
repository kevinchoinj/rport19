import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  width:100%;
  background-color: ${props => props.theme.color};
  color: #aaa;
  transition:.4s ease-in-out;
  font-size: var(--size-small);
  line-height: 140%;
  letter-spacing:1px;
  word-wrap: break-word;
  display: flex;
  flex-direction: column;
  padding: 100px 0px;
  @media screen and (max-width: 992px) {
    width: 100%;
    padding: 0px 1rem;
    margin: 2rem 0;
    box-sizing: border-box;
  }
  @media screen and (max-width: 768px) {
    padding: 2rem 1rem;
    margin:0;
  }
`;
const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;
const StyledTitle = styled.div`
  font-size: var(--size-small);
  letter-spacing: 4px;
  font-weight: 600;
  user-select: none;
  position: relative;
  min-height: 1px;
  margin-left: 16.66666667%;
  width: 33.33333333%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-family: 'Josefin Sans', Helvetica, sans-serif;
  cursor: default;
  @media screen and (max-width: 992px) {
    width: 100%;
    padding: 0px 1rem;
    margin: 0;
    box-sizing: border-box;
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
const Update = ({children, title}) => {
  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledTitle>
          {title}
        </StyledTitle>
        <StyledBody>
          {children}
        </StyledBody>
      </StyledContainer>
    </StyledWrapper>
  );
};

export default Update;