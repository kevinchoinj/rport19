import React from 'react';
import styled from 'styled-components';
import daytime from './daytime.mp4';

const StyledWrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
	background: url(${daytime}) 50%;
	background-size: cover;
	&:before {
    display: flex;
    justify-content: center;
    align-items: center;
		font: 900 50vw sans-serif;
		text-align: center;
    content: 'KC';
    height: 100%;
    width: 100%;
    background: #111;
    color: #fff;
    mix-blend-mode: darken;
	}
`;

const BackgroundClip = () => {
  return (
    <StyledWrapper>
    </StyledWrapper>
  );
};

export default BackgroundClip;