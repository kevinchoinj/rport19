import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  background-color: ${props => props.theme.colorAdminContainer};
  box-shadow: ${props => props.theme.shadowAdmin};
  display: flex;
  flex-direction: column;
  color: #babcc4;
  padding: var(--size-small);
`;

const AdminHome = () => {
  return (
    <StyledWrapper>
      Recent Changes
    </StyledWrapper>
  );
};

export default AdminHome;