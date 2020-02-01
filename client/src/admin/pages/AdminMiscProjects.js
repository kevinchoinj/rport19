import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {addStorePhotoImageAndUrl} from 'actions/images';
import MiscProjectsForm from 'admin/forms/MiscProjectsForm';
import MiscProjectsView from 'admin/components/MiscProjectsView';

const StyledWrapper = styled.div`
  background-color: ${props => props.theme.colorAdminContainer};
  box-shadow: ${props => props.theme.shadowAdmin};
  display: flex;
  flex-direction: column;
  font-family: 'Open Sans', Helvetica, sans-serif;
  color: #babcc4;
  margin-bottom: 14px;
`;
const StyledTitle = styled.div`
  font-size: 36px;
  padding: 16px;
  font-size: 12px;
  text-transform: uppercase;
  border-bottom: 1px solid #babcc4;
`;
const StyledContainer = styled.div`
  padding: var(--size-small);
  display: flex;
`;

const AdminMiscProjects = ({addImage}) => {
  return (
    <>
      <StyledWrapper>
        <StyledTitle>
          Edit Gallery
        </StyledTitle>
        <StyledContainer>
          <MiscProjectsForm onSubmit={addImage}/>
        </StyledContainer>
      </StyledWrapper>
      <MiscProjectsView/>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addImage: (values) => {
      dispatch(addStorePhotoImageAndUrl(values));
    },
  };
};

export default connect (null, mapDispatchToProps)(AdminMiscProjects);
