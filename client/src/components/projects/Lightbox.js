import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as gamingActions from 'actions/gaming';
import {
  selectGamingImage
} from 'reducers';
import {createPortal} from 'react-dom';

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0,0,0,.9);
  display: ${props => props.image ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  z-index: 2;
  img {
    max-width: 80vw;
    max-height: 80vh;
    object-fit: contain;
  }
`;

const portalRoot = document.getElementById('portal-root');

const Lightbox = ({ image, closeImage }) => {
  return createPortal(
    <StyledWrapper
      image={image}
      onClick={() => closeImage()}
    >
      <img src={image} alt={image} loading="lazy"/>
    </StyledWrapper>,
    portalRoot
  );
};

const mapStateToProps = (state) => {
  return {
    image: selectGamingImage(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeImage: (image) => {
      dispatch(gamingActions.setLightboxImage(image));
    },
  };
};

export default connect (mapStateToProps, mapDispatchToProps)(Lightbox);
