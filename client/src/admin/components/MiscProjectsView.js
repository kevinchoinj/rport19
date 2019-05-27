import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import * as imagesActions from 'actions/images';
import {Link} from 'react-router-dom';
import {pageData} from 'data/pageData';
import {
  selectImagesProjects,
} from 'reducers';

const StyledWrapper = styled.div`
  color: #fff;
  display: flex;
  background-color: var(--admin-container-color);
  padding: var(--size-small);
  box-shadow: var(--shadow-box);
  max-width: 100vw;
  flex-wrap: wrap;
`;
const StyledContainer = styled.div`
  width: 33%;
`;
const Image = ({className, src, alt}) => (
  <img src={src} alt="" className={className}/>
);
const StyledImage = styled(Image)`
  width: 100%;
`;
const StyledButton = styled.div`
  cursor: pointer;
  font-size: 13px;
  margin: 7px 0px;
  text-align: center;
  background-color: var(--color-primary);
  color: var(--black-color);
  padding: 14px 8px;
  font-family: 'Open Sans', Helvetica, sans-serif;
  transition: var(--transition-medium);
  font-weight: 700;
  color: var(--color-grey-light);
  &:hover {
    background-color: var(--color-primary-dark);
  }
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
            <StyledButton
              onClick={() => removeProject(value.id, value.doc._rev, value.value.awsKey)}
            >
              delete
            </StyledButton>
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