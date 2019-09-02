import React, {useState, useEffect} from 'react';
import styled, {keyframes} from 'styled-components';

const loadInFrames = keyframes`
  0% {
    transform: translate(0, 50px);
    opacity: 0;
  }
  85% {
    opacity: 1;
  }
  100% {
    transform: translate(0, 0px);
    transform: scale(1);
  }
`;

const StyledLoadIn = styled.div`
  opacity: ${props => props.loaded ? 1 : 0};
  transform: ${props => props.loaded ? 'translateY(0px)' : 'translateY(2rem)'};
  transition: .3s ease ${props => props.loadDelay};
  animation: ${loadInFrames} .3s linear ${props => props.loadDelay};
  animation-fill-mode: both;

  @media screen and (max-width: 992px) {
    transform: none;
    animation: none;
    opacity: 1;
  }
`;

const LoadIn = ({loadDelay, children}) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  return(
    <StyledLoadIn
      loadDelay={loadDelay}
      loaded={loaded}
    >
      {children}
    </StyledLoadIn>
  );
};

export default LoadIn;

