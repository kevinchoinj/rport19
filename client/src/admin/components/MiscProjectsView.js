import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import * as imagesActions from 'actions/images';
import {Link} from 'react-router-dom';
import {pageData} from 'data/pageData';
import AdminButton from 'admin/components/AdminButton';
import {
  selectImagesProjects,
} from 'reducers';

const StyledWrapper = styled.div`
  color: #fff;
  display: flex;
  background-color: ${props => props.theme.colorAdminContainer};
  padding: var(--size-small);
  box-shadow: ${props => props.theme.shadowAdmin};
  max-width: 100vw;
  flex-wrap: wrap;
`;
const StyledContainer = styled.div`
  width: 33%;
`;
const Image = ({className, src, alt}) => (
  <img src={src} alt="" className={className} loading="lazy"/>
);
const StyledImage = styled(Image)`
  width: 100%;
`;

const MiscProjectsView = ({miscProjects, removeProject}) => {
  return (
    <StyledWrapper>
      {miscProjects && miscProjects.map((value) => {
        return (
          <StyledContainer key={value.value.link}>
            <div>
              {value.value.name}
              <br/>
              {value.value.link}
            </div>

            <Link to={`${pageData.adminMiscProjects}/${value.id}`}>
              <StyledImage src={value.value.url} alt={value.value.name}/>
            </Link>
            <AdminButton
              onClick={() => removeProject(value.id, value.doc._rev, value.value.awsKey)}
            >
              delete
            </AdminButton>
          </StyledContainer>
        );
      })}
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    miscProjects: selectImagesProjects(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeProject: (id, rev, awsKey) => {
      dispatch(imagesActions.removeMiscProjectsThenUpdate(id, rev, awsKey));
    }
  };
};

export default connect (mapStateToProps, mapDispatchToProps)(MiscProjectsView);