import React, {useCallback, useMemo} from 'react';
import {connect} from 'react-redux';
import * as menuActions from 'actions/menu';
import {history} from 'store';
import styled from 'styled-components';
import {
  selectMenuDisplay,
  selectMenuHover,
  selectLoadedContent,
} from 'reducers';

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

const BackgroundImage = React.memo(({menuOpen, link, src, onClick}) => {
  return <StyledBackground
    menuOpen={menuOpen}
    style={{
      backgroundImage: `url(${src})`,
    }}
    onClick={() => onClick(link, true)}
  />
});

const BackgroundImageDisplay = ({hoverOption, image, link, loadedContent, menuDisplay, toggleMenu}) => {
  const memoizedMenuOpen = useMemo(() => (link===loadedContent && !menuDisplay)
    || (link===loadedContent && !hoverOption)
    || (image===hoverOption && menuDisplay), [loadedContent, menuDisplay, hoverOption]);
  const memoizedCallback = useCallback(toggleMenu, []);

  return(
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
    loadedContent: selectLoadedContent(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenu: (path, menuDisplay) => {
      dispatch(menuActions.toggleMenu(!menuDisplay));
      history.push(path);
    }
  };
};

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(BackgroundImageDisplay));
