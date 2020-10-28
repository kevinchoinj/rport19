import React, {useCallback} from 'react';
import {hoverMenuOption} from 'actions/menu';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import {menuData} from 'data/menuData';
import styled from 'styled-components';
import {
  selectMenuDisplay,
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
  color: ${props => props.theme.colorTheme};
  cursor: default;
  text-decoration: line-through;
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
    -webkit-text-stroke: 1px ${props => props.theme.colorTheme};
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
const StyledWrapper = styled.div`
  pointer-events: '${props => props.menuDisplay ? 'auto' : 'none'}';
  overflow: auto;
  height: 100%;
  overflow-x: hidden;
`;

const MenuText = ({menuDisplay, location, hoverOption}) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedHover = useCallback(hoverOption, []);
  return(
    <StyledWrapper
      menuDisplay={menuDisplay}
    >
      {menuData.map((value) => (
        <StyledRow key={value.link}>
          <CheckCurrentPage
            loadedContent={location.pathname}
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hoverOption: (option) => {
      dispatch(hoverMenuOption(option));
    }
  };
};

export default React.memo(withRouter(connect(mapStateToProps, mapDispatchToProps)(MenuText)));
