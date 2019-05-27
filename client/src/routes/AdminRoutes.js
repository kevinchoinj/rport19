import React from 'react';
import styled from 'styled-components';
import {Switch, Route} from 'react-router-dom';
import AdminMenu from 'admin/menu/AdminMenu';
import {pageData} from 'data/pageData';
import GetMiscProjects from 'components/services/GetMiscProjects';
import Admin from 'admin/pages/AdminHome';
import AdminMiscProjects from 'admin/pages/AdminMiscProjects';
import AdminMiscProjectsEdit from 'admin/pages/AdminMiscProjectsEdit';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  min-height: 100vh;
`;
const StyledLeft = styled.div`
  flex: 1;
  background-color: var(--admin-container-color);
  box-shadow: var(--shadow-box);
  z-index: 5;
  display: flex;
  justify-content: flex-end;
`;
const StyledRight = styled.div`
  width: 1280px;
  flex-grow: 0;
  flex-shrink: 1;
  max-width: calc(100vw - 100px);
  z-index: 1;
  padding: 20px 50px;
  box-sizing: border-box;
`;
const StyledPlaceholder = styled.div`
  flex: 1;
`;
const RoutesAdmin = () => {
  return (
    <StyledWrapper>
      <GetMiscProjects/>
      <StyledLeft>
        <AdminMenu/>
      </StyledLeft>
      <StyledRight>
        <Switch>
          <Route exact path={pageData.adminHome} render={(props) => <Admin {...props} />}/>
          <Route exact path={pageData.adminMiscProjects} render={(props) => <AdminMiscProjects {...props} />}/>
          <Route exact path={`${pageData.adminMiscProjects}/:id`} render={(props) => <AdminMiscProjectsEdit {...props} />}/>
        </Switch>
      </StyledRight>
      <StyledPlaceholder/>
    </StyledWrapper>
  );
};

export default RoutesAdmin;
