import React, {useCallback, useEffect, useState} from 'react';
import {hoverMenuOption} from 'actions/menu';
import {connect} from 'react-redux';
import Scrollbar from 'smooth-scrollbar';
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
  hoverOption,
  image,
  number,
  text,
}) => {
  if (window.innerWidth >= 768) {
    return (
      <StyledLinkWrapper
        onMouseOver={() => hoverOption(image)}
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
const CheckCurrentPage = React.memo(({loadedContent, link, children}) => {
  if (loadedContent === link) {
    return (
      <StyledLinkDiv>
        {children}
      </StyledLinkDiv>
    );
  }
  else {
    return (
      <StyledLink
        link={link}
        children={children}
        aria-label={link}
      />
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
  z-index: 4;
  pointer-events: '${props => props.menuDisplay ? 'auto' : 'none'}';
  overflow: auto;
  height: 100%;
  overflow-x: hidden;
  .scroll-content {
    cursor: ${props => props.isDown ? 'grabbing' : 'grab'}
    display: flex;
    flex-direction: column;
  }
`;
const MenuText = ({menuDisplay, loadedContent, hoverOption}) => {
  const [scrollbar, setScrollbar] = useState(false);

  useEffect(() => {
    const scrollbar = Scrollbar.init(document.querySelector('#menu_scrollbar'), {
      alwaysShowTracks: false,
    });
    setScrollbar(scrollbar);
  }, []);

  const [isDown, setIsDown] = useState(false);
  const [startY, setStartY] = useState(false);
  const onMouseDown = (e) => {
    e.preventDefault();
    setIsDown(true);
    setStartY(e.pageY);
  };

  const onMouseUp = () => {
    setIsDown(false);
  };

  const onMouseMove = (e) => {
    if (!isDown) {
      return;  // stop the fn from running
    }
    e.preventDefault();
    const y = e.pageY;
    const walk = (y-startY) * 3;
    scrollbar.scrollTo(0, scrollbar.scrollTop - walk, 600);
  };
  const memoizedHover = useCallback(hoverOption, []);

  return(
    <StyledWrapper
      menuDisplay={menuDisplay}
      id="menu_scrollbar"
      onMouseDown={(e) => onMouseDown(e)}
      onMouseUp={() => onMouseUp()}
      onMouseLeave={() => onMouseUp()}
      onMouseMove={(e) => onMouseMove(e)}
      isDown={isDown}
    >
      {menuData.map((value) => (
        <StyledRow key={value.link}>
          <CheckCurrentPage
            loadedContent={loadedContent}
            link={value.link}
          >
            <LinkDivWrapper
              image={value.image}
              hoverOption={memoizedHover}
              number={value.value}
              text={value.text}
            />
          </CheckCurrentPage>
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
