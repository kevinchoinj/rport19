import React, { useCallback, useMemo } from 'react';
import { connect } from 'react-redux';
import * as menuActions from 'actions/menu';
import styled from 'styled-components';
import {
  selectMenuDisplay,
  selectMenuHover,
} from 'reducers';
import { useLocation, useNavigate } from 'react-router-dom';

const StyledBackground = styled.div`
  cursor: pointer;
  height: 100%;
  width: 100vw;
  position: fixed;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  pointer-events: ${props => props.menuOpen ? 'auto' : 'none'};
  opacity: ${props => !props.menuOpen && 0};
  transition: .4s ease;

  @media screen and (max-width: 768px) {
    display: ${props => !props.menuOpen ? 'none' : 'block'};
  }
`;

const BackgroundImage = React.memo(({ menuOpen, link, src, onClick }) => {
  return <StyledBackground
    menuOpen={menuOpen}
    style={{
      backgroundImage: `url(${src})`,
    }}
    onClick={() => onClick(link, true)}
  />;
});

const BackgroundImageDisplay = ({ hoverOption, image, link, menuDisplay, toggleMenu }) => {
  const location = useLocation();
  let navigate = useNavigate();
  const memoizedMenuOpen = useMemo(() => {
    if (!menuDisplay) {
      return (link === location.pathname);
    }
    else {
      if (!hoverOption) {
        return (link === location.pathname);
      }
      return image === hoverOption;
    }
  }, [menuDisplay, hoverOption, location, image, link]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const clickOption = (path, menuDisplay) => {
    toggleMenu(!menuDisplay);
    navigate(path);
  };
  const memoizedCallback = useCallback(clickOption, [navigate, toggleMenu]);
  return (
    <BackgroundImage
      menuOpen={memoizedMenuOpen}
      src={image}
      link={link}
      onClick={memoizedCallback}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    menuDisplay: selectMenuDisplay(state),
    hoverOption: selectMenuHover(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenu: (path, menuDisplay) => {
      dispatch(menuActions.toggleMenu(!menuDisplay));
    }
  };
};

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(BackgroundImageDisplay));
