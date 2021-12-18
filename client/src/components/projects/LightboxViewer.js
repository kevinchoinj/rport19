import React, {useState, useRef} from "react";
import styled from "styled-components";
import {setLightboxImage} from "actions/gaming";
import { connect } from "react-redux";

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
    opacity: .5;
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
        key={obj}
        onClick={() => openLightbox(images[i])}
      >
        <StyledImage src={obj}/>
      </StyledObject>
    );
  });
  return gallery;
};

const Viewer = ({images, setImage}) => {
  const containerRef = useRef(null);
  const [isMoving, setIsMoving] = useState(false);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(false);
  const onMouseDown = (e) => {
    e.preventDefault();
    setIsDown(true);
    setStartX(e.pageX);
  };
  const onMouseUp = () => {
    setIsDown(false);
  };
  const onMouseMove = (e) => {
    if (!isDown) {
      return;  // stop the fn from running
    }
    setIsMoving(true);
    e.preventDefault();
    const x = e.pageX;
    setStartX(e.pageX);
    const walk = (startX - x);
    containerRef.current.scrollLeft = containerRef.current.scrollLeft + walk;
  };
  const openLightbox = (image) => {
    if (isMoving) {
      setIsMoving(false);
      return;
    }
    else {
      setImage(image);
    }
  };

  return (
    <StyledWrapper
      ref={containerRef}
      onMouseDown={(e) => onMouseDown(e)}
      onMouseUp={() => onMouseUp()}
      onMouseLeave={() => onMouseUp()}
      onMouseMove={(e) => onMouseMove(e)}
    >
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
      dispatch(setLightboxImage(image));
    },
  };
};

export default connect (null, mapDispatchToProps)(Viewer);
