import React from 'react';
import useIntersect from 'hooks/useIntersect';
import styled from 'styled-components';

const StyledContainer = styled.div`
  overflow: hidden;
  img {
    transition: 1s ease;
    opacity: ${({ ratio }) => ratio ? 1 : 0};
    transform: ${({ ratio }) => ratio ? 'translateY(0px)' : 'translateY(1rem)'};
    width: 100%;
  }
`;

const LoadIntersectOpacity = ({children, delay}) => {
  const [ref, entry] = useIntersect({
    threshold: .4
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

export default React.memo(LoadIntersectOpacity);