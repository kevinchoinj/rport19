import React from 'react';
import styled from 'styled-components';
import GitView from 'admin/components/GitView';
import FetchGit from 'admin/services/FetchGit';

const StyledWrapper = styled.div`
  background-color: var(--admin-container-color);
  box-shadow: var(--shadow-box);
  display: flex;
  flex-direction: column;
  color: #babcc4;
  padding: var(--size-small);
`;

const AdminHome = () => {
  return (
    <StyledWrapper>
      Recent Changes
      <GitView/>
      <FetchGit/>
    </StyledWrapper>
  );
};

export default AdminHome;