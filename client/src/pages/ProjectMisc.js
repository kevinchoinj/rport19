import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {toggleMenu} from 'actions/menu';
import Skew from 'components/projects/Skew';
import GetMiscProjects from 'components/services/GetMiscProjects';
import Banner from 'components/projects/Banner';
import styled from 'styled-components';

import {
  selectImagesProjects,
} from 'reducers';

const StyledContainer = styled.div`
  background-color: ${props => props.theme.colorBackground};
  width: 100%;
  color: ${props => props.theme.colorText};
  padding-top: 6rem;
  padding-right: 3rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 992px) {
    padding-right: 0px;
    padding-top: 0;
  }
`;
const StyledObject = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin: 14px;
  padding-top: 14px;
  max-width: 25%;
  object-fit: cover;
  color: #fff;
  font-size: 13px;
  flex: 1 1 25%;
  padding: var(--size-small);
  box-sizing: border-box;
  font-size: var(--size-small);
  font-family: 'Open Sans', Helvetica, sans-serif;
  align-items: center;
  a {
    display: inline-block;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    flex: 1 1 100%;
    max-width: 100%;
  }
`;
const StyledTitle = styled.div`
  margin-bottom: var(--size-small);
  text-align: center;
`;

const Image = ({className, src}) => (
  <img src={src} alt="" className={className} loading="lazy"/>
);
const StyledImage = styled(Image)`
  object-fit: contain;
  cursor: pointer;
  transition: .4s ease-out;
  max-width: 100%;
  &:hover {
    transform: translateY(-8px);
  }
`;
const StyledObjects = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const StyledButtons = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 0 2rem;
  box-sizing: border-box;
  align-items: center;
`;
const StyledButton = styled.div`
  border: 1px solid #ddd;
  cursor: pointer;
  padding: .5rem 1rem;
  transition: .2s ease;
  margin-right: 1rem;
  &:hover {
    background-color: #333;
  }
`;

const paginate = (array, page_size, page_number) => {
  --page_number;
  return array.slice(page_number * page_size, (page_number + 1) * page_size);
};
const PAGE_SIZE = 4;

const ProjectMisc = ({ miscProjects, toggleMenu }) => {
  useEffect(() => {
    toggleMenu();
  }, [toggleMenu]);
  const [pageId, setPageId] = useState(1);
  const [displayData, setDisplayData] = useState([]);
  useEffect(() => {
    setDisplayData(paginate(miscProjects, PAGE_SIZE, pageId));
  }, [miscProjects, pageId]);

  return (
    <Skew>
      <GetMiscProjects/>
      <Banner
        line1="Misc Projects"
      />
      <StyledContainer>
        <StyledButtons>
          <StyledButton
            onClick={() => {pageId >= 2 && setPageId(prev => prev - 1)}}
          >
            Previous
          </StyledButton>
          <StyledButton
            onClick={() => {miscProjects.length/(pageId*PAGE_SIZE) >= 1 && setPageId(prev => prev + 1)}}
          >
            Next
          </StyledButton>
          {pageId}/{Math.ceil(miscProjects.length/(PAGE_SIZE))}
        </StyledButtons>
        <StyledObjects>
          {displayData?.map((value) => (
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
        </StyledObjects>
      </StyledContainer>
    </Skew>
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
      dispatch(toggleMenu(false));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectMisc);
