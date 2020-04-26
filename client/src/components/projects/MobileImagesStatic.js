import React from 'react';
import styled from 'styled-components';
import useIntersect from 'hooks/useIntersect';

const StyledWrapper = styled.div`
  bottom: 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  position: relative;
  box-sizing: border-box;
  padding: 32px 8.333333333% 100px 8.333333333%;
  @media screen and (max-width: 992px) {
    padding: 0 0 2rem 0;
    justify-content: space-between;
  }
`;
const StyledContainer = styled.div`
  width: 83.33333333%;
  max-width: 992px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 992px) {
    width: 100%;
    justify-content: space-around;
  }
  @media screen and (max-width: 768px) {
    align-items: center;
    flex-direction: column;
  }
  @media screen and (max-width: 768px) and (orientation: landscape) {
    flex-direction: row;
  }
`;
const StyledColumn = styled.div`
  width: 30%;
  box-sizing: border-box;
  overflow: hidden;
  transform: translate3d(0px, 0px, 0.1px) rotateX(49deg) rotateY(0deg) rotateZ(39deg);
  max-width: 430px;
  margin-right: 1rem;
  img {
    transition: 1s ease ${props => props.delay};
    opacity: ${({ ratio }) => ratio ? 1 : 0};
    transform: ${({ ratio }) => ratio ? 'transformY(0px)' : 'transformY(1rem)'};
    transform-origin: top center;
    width: 100%;
  }
  @media screen and (max-width: 992px) {
    margin-right: 0;
    transform: none;
  }
  @media screen and (max-width: 768px) {
    width: 83.333333%;
    margin: 1rem 0;
  }
  @media screen and (max-width: 768px) and (orientation: landscape) {
    width: 33.33333333%;
  }
`;
//transform: ${({ ratio }) => ratio ? 'scale(1, 1)' : 'scale(1.3, 1.3)'};
const Image = ({className, src}) => (
  <img src={src} alt="" className={className} loading="lazy"/>
);

const StyledImage = styled(Image)`
  width: 100%;
  @media screen and (max-width: 768px) {
    box-sizing:border-box;
  }
`;

const CardObject = ({image, delay}) => {
  const [ref, entry] = useIntersect({
    threshold: .4
  });
  return (
    <StyledColumn
      ref={ref}
      ratio={entry.intersectionRatio}
      delay={delay}
    >
      <StyledImage
        src={image}
      />
    </StyledColumn>
  );
};

const MobileImages = ({image1, image2, image3}) => {
  return (
    <StyledWrapper>
      <StyledContainer>
        <CardObject
          image={image3}
          delay='.1s'
        />
        <CardObject
          image={image2}
          delay='.2s'
        />
        <CardObject
          image={image1}
          delay='.3s'
        />
      </StyledContainer>
    </StyledWrapper>
  );
};

export default React.memo(MobileImages);