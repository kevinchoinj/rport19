import React, {useCallback} from 'react';
import {hoverMenuOption} from 'actions/menu';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {menuData} from 'data/menuData';
import styled from 'styled-components';
import {
  selectMenuDisplay,
  selectLoadedContent,
} from 'reducers';

const StyledLinkWrapper = styled.div`
  display: flex;
  padding-left: 28px;
  padding-right: 6rem;
  box-sizing: border-box;
`;
const LinkDivWrapper = React.memo(({
  memoizedHover,
  image,
  number,
  text,
}) => {
  if (window.innerWidth >= 768) {
    return (
      <StyledLinkWrapper
        onMouseOver={() => memoizedHover(image)}
      >
        <StyledNumber>
          {number}
        </StyledNumber>
        <div style={{marginLeft: '1rem'}}>
          {text}
        </div>
      </StyledLinkWrapper>
    );
  }
  else {
    return (
      <StyledLinkWrapper>
        <StyledNumber>
          {number}
        </StyledNumber>
        <div style={{marginLeft: '1rem'}}>
          {text}
        </div>
      </StyledLinkWrapper>
    );
  }
});

const StyledLinkDiv = styled.div`
  font-size: 4.5vw;
  line-height: 150%;
  font-family: 'Josefin Sans', Helvetica, sans-serif;
  color: #666;
  cursor: default;
  @media screen and (max-width: 1920px ) {
    font-size: 4rem;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    min-width: 0px;
    font-size: var(--size-large);
    line-height: 150%;
  }
`;
const LinkObject = ({className, link, children}) => (
  <Link
    to={link}
    className = {className}
  >
    {children}
  </Link>
);
const StyledLink = styled(LinkObject)`
  font-size: 4.5vw;
  line-height: 150%;
  font-family: 'Josefin Sans', Helvetica, sans-serif;
  color: ${props => props.theme.colorText};
  text-decoration: none;
  transition: 0s;
  cursor: pointer;
  &:hover, &:focus {
    color: transparent;
    -webkit-text-stroke: 1px ${props => props.theme.colorText};
  }
  @media screen and (max-width: 1920px ) {
    font-size: 4rem;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    min-width: 0px;
    font-size: var(--size-large);
    line-height: 150%;
  }
`;
const CheckCurrentPage = React.memo(({loadedContent, link, image, memoizedHover, number, text}) => {
  if (loadedContent === link) {
    return (
      <StyledLinkDiv>
        <LinkDivWrapper
          image={image}
          memoizedHover={memoizedHover}
          number={number}
          text={text}
        />
      </StyledLinkDiv>
    );
  }
  else {
    return (
      <StyledLink
        link={link}
        aria-label={link}
      >
        <LinkDivWrapper
          image={image}
          memoizedHover={memoizedHover}
          number={number}
          text={text}
        />
      </StyledLink>
    );
  }
});

const StyledNumber = styled.div`
  float: left;
  font-size: var(--size-medium);
  transform: rotate(270deg);
`;
const StyledRow = styled.div`

`;
//there is a bug past v0.50 in chrome where the grab/grabbing cursors are buggy while devtools is open
const StyledWrapper = styled.div`
  pointer-events: '${props => props.menuDisplay ? 'auto' : 'none'}';
  overflow: auto;
  height: 100%;
  overflow-x: hidden;
`;
const MenuText = ({menuDisplay, loadedContent, hoverOption}) => {
  const memoizedHover = useCallback(hoverOption, []);

  return(
    <StyledWrapper
      menuDisplay={menuDisplay}
    >
      {menuData.map((value) => (
        <StyledRow key={value.link}>
          <CheckCurrentPage
            loadedContent={loadedContent}
            link={value.link}
            image={value.image}
            memoizedHover={memoizedHover}
            number={value.value}
            text={value.text}
          />
        </StyledRow>
      ))}
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    menuDisplay: selectMenuDisplay(state),
    loadedContent: selectLoadedContent(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hoverOption: (option) => {
      dispatch(hoverMenuOption(option));
    }
  };
};

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(MenuText));
