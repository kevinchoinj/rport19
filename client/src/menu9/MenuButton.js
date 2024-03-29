import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMenuDisplayAndResetHover } from "reducers/menu";
import { selectMenuDisplay } from "reducers";
import styled from "styled-components";

const StyledContainer = styled.div`
  background: transparent;
  color: ${(props) => props.theme.colorBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  padding: 1rem;
  background-color: ${(props) => props.theme.colorTheme};
  poisition: relative;
  @media screen and (max-width: 768px) {
    height: 1rem;
    width: 1rem;
  }
`;
const StyledLines = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  height: var(--size-spacing-small);
`;
const StyledLineOne = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: ${(props) =>
    props.menuDisplay ? "translate(-50%, -50%) rotate(-45deg)" : "translate(-50%, -30%) rotate(90deg) scaleY(0.7)"};
  height: 100%;
  width: 1px;
  background-color: #000;
  transition: all 0.5s cubic-bezier(0, 0.785, 0, 1);
`;
const StyledLineTwo = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: ${(props) =>
    props.menuDisplay ? "translate(-50%, -50%) rotate(45deg)" : "translate(-50%, -70%) rotate(90deg) scaleY(0.7)"};
  height: 100%;
  width: 1px;
  background-color: #000;
  transition: all 0.5s cubic-bezier(0, 0.785, 0, 1);
`;
const StyledText = styled.div`
  position: relative;
  height: 2rem;
  padding: 1rem;
  background-color: ${(props) => props.theme.colorTheme};
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colorTheme};
  transform: ${(props) => props.menuDisplay && "translateX(calc(100%))"};
  transition: 0.2s ease;
  font-size: var(--size-small);
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const StyledTextWrapper = styled.div`
  overflow: hidden;
`;
const StyledWrapper = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 4;
  cursor: pointer;
  transition: ${(props) => props.theme.transitionMedium};
  display: flex;
  box-sizing: border-box;
  &:hover ${StyledContainer} ${StyledLines} ${StyledLineOne} {
    transform: translate(-50%, -50%);
  }
  &:hover ${StyledLineTwo} {
    transform: translate(-50%, -50%);
  }
  &:active,
  &:focus {
    outline: none;
  }
  &:hover ${StyledText} {
    transform: ${(props) => !props.menuDisplay && "translateX(1rem)"};
  }
`;

const handleKeyDown = (event, action) => {
  if (event.keyCode === 13) {
    action();
  }
};

const MenuButton = () => {
  const dispatch = useDispatch();
  const menuDisplay = useSelector(selectMenuDisplay);
  return (
    <StyledWrapper
      menuDisplay={menuDisplay}
      onClick={() => dispatch(setMenuDisplayAndResetHover(!menuDisplay))}
      onKeyDown={(event) => handleKeyDown(event, () => dispatch(setMenuDisplayAndResetHover(!menuDisplay)))}
    >
      <StyledTextWrapper>
        <StyledText menuDisplay={menuDisplay}>EXPLORE</StyledText>
      </StyledTextWrapper>
      <StyledContainer>
        <StyledLines>
          <StyledLineOne menuDisplay={menuDisplay} />
          <StyledLineTwo menuDisplay={menuDisplay} />
        </StyledLines>
      </StyledContainer>
    </StyledWrapper>
  );
};

export default MenuButton;
