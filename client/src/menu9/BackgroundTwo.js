import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import * as menuActions from 'actions/menu';
import {history} from 'store';
import styled from 'styled-components';
import {
  selectMenuDisplay,
  selectMenuHover,
  selectLoadedContent,
} from 'reducers';
import {compose, find, prop, propEq} from 'ramda';
import {menuData} from 'data/menuData';

const StyledBackground = styled.div`
  cursor: pointer;
  height: 100%;
  width: 100vw;
  position: fixed;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  pointer-events: ${props => props.menuOpen ? 'auto' : 'none'};

  @media screen and (max-width: 768px) {
    display: ${props => !props.menuOpen ? 'none' : 'block'};
  }
`;

const BackgroundImageDisplay = ({hoverOption, image, link, loadedContent, menuDisplay, toggleMenu}) => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(false);
  useEffect(() => {
    if (!menuDisplay) {
      setCurrentImage(compose(prop('image'),find(propEq('link', loadedContent)))(menuData));
    }
    else {
      if (hoverOption) {
        setCurrentImage(hoverOption);
      }
      else {
        setCurrentImage(compose(prop('image'),find(propEq('link', loadedContent)))(menuData));
      }
    }
    console.log(currentImage);
  }, [menuDisplay, hoverOption])
  useEffect(() => {
    setMenuOpen(
      (link===loadedContent && !menuDisplay)
    || (link===loadedContent && !hoverOption)
    || (image===hoverOption && menuDisplay)
    );
  }, [loadedContent, menuDisplay, hoverOption, image, link, menuOpen]);
  return(
    <StyledBackground
      menuOpen={menuOpen}
      menuDisplay ={menuDisplay}
      style={{
        backgroundImage: `url(${currentImage})`,
      }}
      onClick={() => toggleMenu(link, menuDisplay)}
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
