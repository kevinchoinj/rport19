import React, { useRef } from "react";
import styled from "styled-components";
import { setLightboxImage } from "reducers/gaming";
import { useDispatch } from "react-redux";
import useDragScroll from "components/services/useDragScroll";

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
const Image = ({ className, hasSwiped, src }) => {
  const imageRef = useRef(null);
  const dispatch = useDispatch();
  return (
    <img
      ref={imageRef}
      onClick={() => (hasSwiped ? null : dispatch(setLightboxImage(src)))}
      src={src}
      alt=""
      className={className}
      loading="lazy"
    />
  );
};

const StyledImage = styled(Image)`
  height: 100%;
  transition: 0.2s ease;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
  @media screen and (max-width: 768px) {
    height: auto;
    width: 100%;
  }
`;

const Viewer = ({ images }) => {
  const containerRef = useRef(null);

  const { hasSwiped } = useDragScroll({
    sliderRef: containerRef,
  });

  return (
    <StyledWrapper ref={containerRef}>
      {images.map((src) => (
        <StyledObject key={src}>
          <StyledImage src={src} hasSwiped={hasSwiped} />
        </StyledObject>
      ))}
    </StyledWrapper>
  );
};

export default Viewer;
