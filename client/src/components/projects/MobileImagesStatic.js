import React from 'react';
import styled from 'styled-components';
import useIntersect from 'hooks/useIntersect';

const StyledWrapper = styled.div`
  bottom: 0px;
  background-color: ${props => props.theme.colorBackground};
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  padding: 32px 8.333333333% 100px 8.333333333%;
  @media screen and (max-width: 992px) {
    padding: 0px;
  }
  @media screen and (max-width: 768px) {
    padding-bottom: 2rem;
  }
`;
const StyledContainer = styled.div`
  width: 83.33333333%;
  max-width: 992px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 992px) {
    width: 100%;
    align-items: center;
  }
  @media screen and (max-width: 768px) {
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
  img {
    transition: .6s ease ${props => props.delay};
    transform: ${({ ratio }) => ratio ? 'scale(1, 1)' : 'scale(1.3, 1.3)'};
    transform-origin: top center;
    width: 100%;
  }
  @media screen and (max-width: 992px) {
    width: 33.3333%;
    margin-right: 0;
  }
  @media screen and (max-width: 768px) {
    width: 83.333333%;
  }
  @media screen and (max-width: 768px) and (orientation: landscape) {
    width: 33.33333333%;
  }
`;

const Image = ({className, src}) => (
  <img src={src} alt="" className={className} loading="lazy"/>
);

const StyledImage = styled(Image)`
  width: 100%;
  @media screen and (max-width: 992px) {
    padding: 1.5rem 1.5rem 0 1.5rem;
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
          image={image1}
          delay='.1s'
        />
        <CardObject
          image={image2}
          delay='.2s'
        />
        <CardObject
          image={image3}
          delay='.3s'
        />
      </StyledContainer>
    </StyledWrapper>
  );
};

export default MobileImages;