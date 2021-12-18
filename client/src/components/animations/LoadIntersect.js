import React from "react";
import useIntersect from "hooks/useIntersect";
import styled from "styled-components";

const StyledContainer = styled.div`
  transition-duration: .4s;
  transition-timing-function: ease;
  transition-delay: ${props => props.delay ? props.delay : ".1s"};
  opacity: ${({ ratio }) => ratio ? 1 : 0};
  transform: ${({ ratio }) => ratio ? "translateY(0px)" : "translateY(2rem)"};
`;

const Box = ({children, delay}) => {
  const [ref, entry] = useIntersect({
    threshold: .2
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

export default Box;