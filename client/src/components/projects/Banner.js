import React from 'react';
import LoadIn from 'components/animations/LoadIn';
import styled, {keyframes} from 'styled-components';
import {connect} from 'react-redux';
import * as mouseActions from 'actions/mouse';
import {
  selectIsMobile,
  selectMenuDisplay,
} from 'reducers';

const StyledTextWrapper = styled.div`
  width: 16.66666667%;
  display: inline-block;
  word-wrap: break-word;
  @media screen and (max-width: 992px) {
    width: 83.33333333%;
  }
`;
const StyledTextSmall = styled.div`
  color: ${props => props.theme.colorLinkHover};
  letter-spacing: 0px;
  font-size: var(--size-small);
  font-family: 'Josefin Sans', Helvetica, sans-serif;
  margin-top: .5rem;
`;
const TextDisplay = ({ textLine, loadDelay, label }) => {
  if (label === 'LINK' && textLine) {
    return (
      <StyledTextWrapper>
        <LoadIn
          loadDelay={loadDelay}
          onPageLoad={true}
        >
          {label}
          <br/>
          <StyledTextSmall>
            <a
              href={textLine}
              aria-label={`${label} link`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Link
            </a>
          </StyledTextSmall>
        </LoadIn>
      </StyledTextWrapper>
    );
  }
  else if (textLine) {
    return (
      <StyledTextWrapper>
        <LoadIn
          loadDelay={loadDelay}
          onPageLoad={true}
        >
          {label}
          <br/>
          <StyledTextSmall>
            {textLine}
          </StyledTextSmall>
        </LoadIn>
      </StyledTextWrapper>
    );
  }
  else {
    return null;
  }
};

const StyledWrapper = styled.div`
  height:100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  a {
    color: ${props=> props.theme.colorLink};
    text-decoration: none;
    transition: ${props => props.theme.transitionMedium}
    :hover {
      color: ${props => props.theme.colorLinkHover}
    }
  }
`;
const fadeIn = keyframes`
  0% {
    transform: translateY(10vh);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
`;
const StyledContainer = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colorBackground};
  position: absolute;
  bottom: 0px;
  color: #fff;
  height: 18rem;
  align-items: center;
  font-size: var(--size-small);
  line-height: 140%;
  letter-spacing: 0px;
  transition: ${props => props.theme.transitionMedium};
  animation: ${fadeIn} .4s ease both;
  letter-spacing: 4px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  opacity: ${props => props.menuDisplay ? 0 : 1};
  @media screen and (max-width: 992px) {
    height: 22rem;
    max-width: none;
    justify-content: flex-start;
  }
`;
const StyledText = styled.div`
  width: 100%;
  max-width: 66vw;
  padding: 0px 3rem;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 992px) {
    flex-direction: column;
    box-sizing: border-box;
    padding: 0 1rem;
  }
`;
const Banner = ({ line1, line2, line3, line4, hoverImage, isMobile, menuDisplay }) => {
  return (
    <StyledWrapper
      onMouseEnter={() => hoverImage('down')}
      onMouseLeave ={() => hoverImage('')}
    >
      <StyledContainer menuDisplay={menuDisplay}>
        <StyledText>
          <TextDisplay
            textLine = {line1}
            loadDelay = "0.3s"
            label = 'TITLE'
          />
          <TextDisplay
            textLine = {line2}
            loadDelay = "0.4s"
            label = 'YEAR'
          />
          <TextDisplay
            textLine = {line3}
            loadDelay = "0.5s"
            label = 'LANG'
          />
          <TextDisplay
            textLine = {line4}
            loadDelay = "0.6s"
            label = 'LINK'
          />
        </StyledText>
      </StyledContainer>
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    menuDisplay: selectMenuDisplay(state),
    isMobile: selectIsMobile(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hoverImage: (value) => dispatch(mouseActions.hoverImage(value)),
  };
};

export default connect (mapStateToProps, mapDispatchToProps)(Banner);
