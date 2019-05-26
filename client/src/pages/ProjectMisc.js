import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import * as menuActions from 'actions/menu';
import Skew from 'components/Skew';
import GetMiscProjects from 'components/services/GetMiscProjects';
import Banner from 'components/Banner';
import styled from 'styled-components';

import {
  selectImagesProjects,
} from 'reducers';

const StyledContainer = styled.div`
  background-color: var(--black-color);
  width: 100%;
  color: var(--color-grey-light);
  padding-top: 6rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media screen and (max-width: 992px) {
    padding-top: 0;
  }
`;
const StyledObject = styled.div`
  display: inline-block;
  margin: 14px;
  padding-top: 14px;
  max-width: 100%;
  object-fit: cover;
  color: #fff;
  font-size: 13px;
  width: 33%;
  padding: var(--size-small);
  box-sizing: border-box;
  font-size: var(--size-small);
  font-family: 'Open Sans', Helvetica, sans-serif;
`;
const StyledTitle = styled.div`
  margin-bottom: var(--size-small);
  text-align: center;
`;

const Image = ({className, src}) => (
  <img src={src} alt="" className={className}/>
);
const StyledImage = styled(Image)`
  width: 100%;
  box-shadow: 5px 8px 13.92px 2.08px rgba(155,155,155,.03);
  cursor: pointer;
  transition: .4s ease-out;
  max-width: 100%;
  &:hover {
    transform: translateY(-8px);
  }
`;

const ProjectMisc = ({miscProjects, toggleMenu}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    toggleMenu();
  }, [toggleMenu]);
  return (
    <div tabIndex="0">
      <Skew>
        <GetMiscProjects/>
        <Banner
          line1="Misc Projects"
        />
        <StyledContainer>
          {miscProjects && miscProjects.map((value) => (
            <StyledObject key={value.value.name}>
              <StyledTitle>
                {value.value.name}
              </StyledTitle>
              <a
                href={value.value.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={value.value.name}
              >
                <StyledImage
                  src={value.value.url}
                />
              </a>
            </StyledObject>
          ))}
        </StyledContainer>
      </Skew>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    miscProjects: selectImagesProjects(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenu: () => {
      dispatch(menuActions.toggleMenu(false));
    },
  };
};

export default connect (mapStateToProps, mapDispatchToProps)(ProjectMisc);
