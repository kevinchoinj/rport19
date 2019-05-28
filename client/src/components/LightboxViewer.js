import React, {useState, useEffect} from 'react';
import Lightbox from 'react-images';
import Scrollbar from 'smooth-scrollbar';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  position: relative;
  display: flex;
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
  z-index: 10;
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
  @media screen and (max-width: 768px) {
    height: auto;
    width: 100%;
  }
`;

const RenderGallery = ({images, openLightbox, scrollbar}) => {
  if (!images) return;
  const gallery = images.map((obj, i) => {
    return (
      <StyledObject
        key={obj.src}
        onLoad={() => scrollbar.update()}
        onClick={(e) => openLightbox(i,e)}
      >
        <StyledImage src={obj.src}/>
      </StyledObject>
    );
  });
  return gallery;
};

const Viewer = ({images, carouselId}) => {

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

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const openLightbox = (index, event) => {
    if (isMoving) {
      event.preventDefault();
      setIsMoving(false);
    }
    else {
      event.preventDefault();
      setCurrentImage(index);
      setLightboxOpen(true);
    }
  };
  const closeLightbox = () => {
    setCurrentImage(0);
    setLightboxOpen(false);
  };

  const [isMoving, setIsMoving] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const handleClickImage = () => {
    if (currentImage === images.length - 1) {
      return;
    }
    setCurrentImage(currentImage + 1);
  };

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
    <StyledWrapper style={{cursor: isDown ? 'grabbing' : 'grab'}}>
      <div
        id={carouselId.slice(1)}
        onMouseDown={(e) => onMouseDown(e)}
        onMouseUp={() => onMouseUp()}
        onMouseLeave={() => onMouseUp()}
        onMouseMove={(e) => onMouseMove(e)}
      >
        <RenderGallery images={images} openLightbox = {openLightbox} scrollbar={scrollbar}/>
        <Lightbox
          currentImage={currentImage}
          images={images}
          isOpen={lightboxOpen}
          onClickImage={handleClickImage}
          onClickNext={() => setCurrentImage(currentImage + 1)}
          onClickPrev={() => setCurrentImage(currentImage - 1)}
          onClose={closeLightbox}
          backdropClosesModal={true}
          openLightbox = {openLightbox}
        />
      </div>
      <StyledIndicators>
        <div onClick={() => goLeft()}>&lsaquo;</div>
        <div onClick={() => goRight()}>&rsaquo;</div>
      </StyledIndicators>
    </StyledWrapper>
  );
};

export default Viewer;