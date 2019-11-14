import React, {useState, useEffect} from 'react';
import Scrollbar from 'smooth-scrollbar';
import styled from 'styled-components';
import * as gamingActions from 'actions/gaming';
import { connect } from 'react-redux';

const StyledWrapper = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  position: relative;
  display: flex;
  cursor: ${props => props.isDown ? 'grabbing' : 'grab'}
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
const StyledIndicators = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 25vh;
  position: absolute;
  padding: 0 2rem;
  box-sizing: border-box;
  pointer-events: none;
  user-select: none;
  div {
    pointer-events: auto;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    display: none;
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
  <img src={src} alt="" className={className}/>
);
const StyledImage = styled(Image)`
  height: 100%;
  transition: 1s ease;
  transform: ${props => props.isDown && 'scale(0.9)'};
  @media screen and (max-width: 768px) {
    height: auto;
    width: 100%;
  }
`;

const RenderGallery = ({images, openLightbox, scrollbar, isDown}) => {
  if (!images) return;
  const gallery = images.map((obj, i) => {
    return (
      <StyledObject
        key={obj.src}
        onLoad={() => scrollbar && scrollbar.update()}
        onClick={() => openLightbox(images[i].src)}
      >
        <StyledImage src={obj.src} isDown={isDown}/>
      </StyledObject>
    );
  });
  return gallery;
};

const Viewer = ({images, carouselId, setImage}) => {

  const [scrollbar, setScrollbar] = useState(false);

  useEffect(() => {
    const scrollbar = Scrollbar.init(document.querySelector(carouselId),
      {
        alwaysShowTracks: true,
      });
    setScrollbar(scrollbar);
  }, [carouselId]);

  const goLeft = () => {
    scrollbar.scrollTo(scrollbar.scrollLeft - window.innerWidth/3, 0, 600);
  };
  const goRight = () => {
    scrollbar.scrollTo(scrollbar.scrollLeft + window.innerWidth/3, 0, 600);
  };

  const openLightbox = (image) => {
    if (isMoving) {
      setIsMoving(false);
    }
    else {
      setImage(image);
    }
  };

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
    const walk = (x-startX) * 3;
    scrollbar.scrollTo(scrollbar.scrollLeft - walk, 0, 600);
  };

  return (
    <StyledWrapper isDown={isDown} >
      <div
        id={carouselId.slice(1)}
        onMouseDown={(e) => onMouseDown(e)}
        onMouseUp={() => onMouseUp()}
        onMouseLeave={() => onMouseUp()}
        onMouseMove={(e) => onMouseMove(e)}
      >
        <RenderGallery
          isDown={isDown}
          images={images}
          scrollbar={scrollbar}
          openLightbox={openLightbox}
        />
      </div>
      <StyledIndicators>
        <div onClick={() => goLeft()}>&lsaquo;</div>
        <div onClick={() => goRight()}>&rsaquo;</div>
      </StyledIndicators>
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
