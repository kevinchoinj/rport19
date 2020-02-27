import React from 'react';
import styled from 'styled-components';
import * as gamingActions from 'actions/gaming';
import { connect } from 'react-redux';

const StyledWrapper = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  position: relative;
  display: flex;
  @media screen and (max-width: 768px) {
    cursor: pointer;
    display: none;
  }
  .scroll-content {
    width: 100%;
    height: 50vh;
    display: flex;
    @media screen and (max-width: 768px) {
      height: auto;
      flex-direction: column;
    }
  }
`;
const StyledObject = styled.div`
  padding: 28px;
  height: 50vh;
  width: auto;
  box-sizing: border-box;
  @media screen and (max-width: 768px) {
    padding: 3px;
    height: auto;
  }
`;
const Image = ({className, src}) => (
  <img src={src} alt="" className={className} loading="lazy"/>
);
const StyledImage = styled(Image)`
  height: 100%;
  transition: .2s ease;
  cursor: pointer;
  &:hover {
    opacity: .8;
  }
  @media screen and (max-width: 768px) {
    height: auto;
    width: 100%;
  }
`;

const RenderGallery = ({images, openLightbox}) => {
  if (!images) return;
  const gallery = images.map((obj, i) => {
    return (
      <StyledObject
        key={obj.src}
        onClick={() => openLightbox(images[i].src)}
      >
        <StyledImage src={obj.src}/>
      </StyledObject>
    );
  });
  return gallery;
};

const Viewer = ({images, setImage}) => {

  const openLightbox = (image) => {
    setImage(image);
  };

  return (
    <StyledWrapper>
      <RenderGallery
        images={images}
        openLightbox={openLightbox}
      />
    </StyledWrapper>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setImage: (image) => {
      dispatch(gamingActions.setLightboxImage(image));
    },
  };
};

export default connect (null, mapDispatchToProps)(Viewer);
