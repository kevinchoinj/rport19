import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import AdminMenu from "admin/menu/AdminMenu";
import GetMiscProjects from "components/services/GetMiscProjects";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  min-height: 100%;
`;
const StyledLeft = styled.div`
  flex: 1;
  background-color: ${props => props.theme.colorAdminContainer};
  box-shadow: ${props => props.theme.shadowAdmin};
  display: flex;
  justify-content: flex-end;
`;
const StyledRight = styled.div`
  width: 1280px;
  flex-grow: 0;
  flex-shrink: 1;
  max-width: calc(100vw - 100px);
  padding: 20px 50px;
  box-sizing: border-box;
`;
const StyledPlaceholder = styled.div`
  flex: 1;
`;
const RoutesAdmin = () => {
  return (
    <StyledWrapper>
      <GetMiscProjects />
      <StyledLeft>
        <AdminMenu />
      </StyledLeft>
      <StyledRight>
        <Outlet />
      </StyledRight>
      <StyledPlaceholder />
    </StyledWrapper>
  );
};

export default RoutesAdmin;
