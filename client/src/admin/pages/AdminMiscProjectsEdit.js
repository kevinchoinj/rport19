import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { putProject } from "reducers/projects";
import MiscProjectsEditForm from "admin/forms/MiscProjectsEditForm";
import { useNavigate, useParams } from "react-router-dom";

const StyledWrapper = styled.div`
  background-color: ${(props) => props.theme.colorAdminContainer};
  box-shadow: ${(props) => props.theme.shadowAdmin};
  display: flex;
  flex-direction: column;
  font-family: "Open Sans", Helvetica, sans-serif;
  color: #babcc4;
  margin-bottom: 14px;
`;
const StyledContainer = styled.div`
  padding: var(--size-small);
  display: flex;
`;

const AdminMiscProjects = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams("/shodyra/admin/misc/:id");
  return (
    <StyledWrapper>
      <StyledContainer>
        <MiscProjectsEditForm
          id={params.id}
          onSubmit={(data) => dispatch(putProject(data)).then(() => navigate("/shodyra/admin/misc"))}
        />
      </StyledContainer>
    </StyledWrapper>
  );
};

export default AdminMiscProjects;
