import React, {useState, useEffect} from 'react';
import Lightbox from 'react-images';
import Scrollbar from 'smooth-scrollbar';

const RenderGallery = ({images, openLightbox, scrollbar}) => {
  if (!images) return;
  const gallery = images.map((obj, i) => {
    return (
      <div
        key={obj.src}
        className="gaming_carousel_object"
        onLoad={() => scrollbar.update()}
        onClick={(e) => openLightbox(i,e)}
      >
        <img
          src={obj.src}
          className="gaming_carousel_image"
          alt="gaming screenshot"
        />
      </div>
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
    <div className="gaming_carousel__wrapper">
      <div
        className="gaming_carousel__container"
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
      <div className="indicators">
        <div onClick={() => goLeft()}>&lsaquo;</div>
        <div onClick={() => goRight()}>&rsaquo;</div>
      </div>
    </div>
  );
};

export default Viewer;