import React from 'react';
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
  pointer-events: ${props => props.menuOpen ? 'auto' : 'none'};
  opacity: ${props => props.menuOpen ? 1 : 0};
  transition: ${props => props.menuOpen ? 'var(--transition-medium)' : 'none'};
  cursor: pointer;
  height: 100vh;
  width: 100vw;
  position: fixed;
  background-image: url('${props => props.image}');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  pointer-events: none;
`;

const BackgroundImageDisplay = ({hoverOption, image, link, loadedContent, menuDisplay, toggleMenu}) => {
  return(
    <StyledBackground
      image={image}
      onClick={() => toggleMenu(link, menuDisplay)}
      menuOpen = {
        (link===loadedContent && !menuDisplay) ||
        (image===hoverOption && menuDisplay)
      }
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

export default connect (mapStateToProps, mapDispatchToProps)(BackgroundImageDisplay);
