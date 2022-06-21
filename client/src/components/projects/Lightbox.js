import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setLightboxImage } from "reducers/gaming";
import { selectGamingImage } from "reducers";
import { createPortal } from "react-dom";

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.9);
  display: ${(props) => (props.image ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  img {
    max-width: 80vw;
    max-height: 80vh;
    object-fit: contain;
  }
`;

const portalRoot = document.getElementById("portal-root");

const Lightbox = () => {
  const dispatch = useDispatch();
  const image = useSelector(selectGamingImage);

  return createPortal(
    <StyledWrapper image={image} onClick={() => dispatch(setLightboxImage())}>
      <img src={image} alt={image} loading="lazy" />
    </StyledWrapper>,
    portalRoot
  );
};

export default Lightbox;
