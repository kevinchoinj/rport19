import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMenuDisplay } from "reducers/menu";
import styled from "styled-components";

const StyledWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  flex-direction: column;
`;
const StyledTitle = styled.div`
  font-size: 5.9vw;
`;
const StyledText = styled.div`
  font-size: 20px;
`;

export const NotFound = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setMenuDisplay());
  }, [dispatch]);

  return (
    <StyledWrapper>
      <StyledTitle>404</StyledTitle>
      <StyledText>Sorry, that page does not exist.</StyledText>
    </StyledWrapper>
  );
};

export default NotFound;
