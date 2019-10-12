import React from 'react';
import useIntersect from 'hooks/useIntersect';
import styled from 'styled-components';

const StyledContainer = styled.div`
  transition-duration: 1s;
  transition-timing-function: ease;
  transition-delay: ${props => props.delay ? props.delay : '0s'};
  transform: ${({ ratio }) => ratio ? 'translateY(0px) scale(1)' : 'translateY(2rem) scale(1.1, 1.1)'};
  overflow: hidden;
`;
const StyledOverlay = styled.div`
  position: absolute;
  top: 0px;
  left: 0;
  transform: ${props => props.ratio ? 'translateY(-100%)' :' translateY(0px)'};
  background-color: ${props => props.theme.colorBackground};
  width: 100%;
  height: 100%;
  transition: 1s ease;
`;

const buildThresholdArray = () => Array.from(Array(100).keys(), i => i / 100);

const Box = ({children, delay}) => {
  const [ref, entry] = useIntersect({
    threshold: buildThresholdArray()
  });
  return (
    <StyledContainer
      ref={ref}
      ratio={entry.intersectionRatio}
      delay={delay}
    >
      {children}
      <StyledOverlay ratio={entry.intersectionRatio}/>
    </StyledContainer>
  );
};

export default Box;
