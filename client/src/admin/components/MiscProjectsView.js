import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteImage, deleteProject } from "reducers/projects";
import { Link } from "react-router-dom";
import { pageData } from "data/pageData";
import AdminButton from "admin/components/AdminButton";
import { selectImagesProjects } from "reducers";

const StyledWrapper = styled.div`
  color: #fff;
  display: flex;
  background-color: ${(props) => props.theme.colorAdminContainer};
  padding: var(--size-small);
  box-shadow: ${(props) => props.theme.shadowAdmin};
  max-width: 100vw;
  flex-wrap: wrap;
`;
const StyledContainer = styled.div`
  width: 33%;
`;
const Image = ({ className, src }) => <img src={src} alt="" className={className} loading="lazy" />;
const StyledImage = styled(Image)`
  width: 100%;
`;

const MiscProjectsView = () => {
  const dispatch = useDispatch();
  const miscProjects = useSelector(selectImagesProjects);
  return (
    <StyledWrapper>
      {miscProjects &&
        miscProjects.map((value) => {
          return (
            <StyledContainer key={value.value.link}>
              <div>
                {value.value.name}
                <br />
                {value.value.link}
              </div>

              <Link to={`${pageData.adminMiscProjects}/${value.id}`}>
                <StyledImage src={value.value.url} alt={value.value.name} />
              </Link>
              <AdminButton
                onClick={() =>
                  dispatch(deleteImage({ awsKey: value.value.awsKey })).then(() => {
                    dispatch(deleteProject({ id: value.id, rev: value.doc._rev }));
                  })
                }
              >
                delete
              </AdminButton>
            </StyledContainer>
          );
        })}
    </StyledWrapper>
  );
};

export default MiscProjectsView;
