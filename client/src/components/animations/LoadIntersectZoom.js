import React from 'react';
import useIntersect from 'hooks/useIntersect';
import styled from 'styled-components';

const StyledContainer = styled.div`
  overflow: hidden;
  img {
    transition: .6s ease;
    transform: ${({ ratio }) => ratio ? 'scale(1, 1)' : 'scale(1.3, 1.3)'};
    transform-origin: top center;
    width: 100%;
  }
`;

const LoadIntersectZoom = ({children, delay}) => {
  const [ref, entry] = useIntersect({
    threshold: .3
  });
  return (
    <StyledContainer
      ref={ref}
      ratio={entry.intersectionRatio}
      delay={delay}
    >
      {children}
    </StyledContainer>
  );
};

export default LoadIntersectZoom;