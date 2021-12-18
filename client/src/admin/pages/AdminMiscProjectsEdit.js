import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as imagesActions from "actions/images";
import MiscProjectsEditForm from "admin/forms/MiscProjectsEditForm";

const StyledWrapper = styled.div`
  background-color: ${props => props.theme.colorAdminContainer};
  box-shadow: ${props => props.theme.shadowAdmin};
  display: flex;
  flex-direction: column;
  font-family: 'Open Sans', Helvetica, sans-serif;
  color: #babcc4;
  margin-bottom: 14px;
`;
const StyledContainer = styled.div`
  padding: var(--size-small);
  display: flex;
`;


const AdminMiscProjects = ({match, editImage}) => {
  return (
    <StyledWrapper>
      <StyledContainer>
        <MiscProjectsEditForm
          id={match.params.id}
          onSubmit={editImage}
        />
      </StyledContainer>
    </StyledWrapper>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    editImage: (values) => {
      dispatch(imagesActions.editMiscProjectsThenUpdate(values, "/shodyra/admin/misc"));
    },
  };
};

export default connect (null, mapDispatchToProps)(AdminMiscProjects);

