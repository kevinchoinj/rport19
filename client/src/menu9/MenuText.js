import React, {useEffect} from 'react';
import * as menuActions from 'actions/menu';
import {connect} from 'react-redux';
import classNames from 'classnames';
import Scrollbar from 'smooth-scrollbar';
import {Link} from 'react-router-dom';
import {menuData} from 'data/menuData';
import styled from 'styled-components';
import {
  selectMenuDisplay,
  selectLoadedContent,
} from 'reducers';

const StyledLinkWrapper = styled.div`
  display: flex;
  padding-left: 28px;
  padding-right: 28px;
  box-sizing: border-box;
`;
const LinkDivWrapper = ({hoverOption, image, children}) => {
  if (window.innerWidth >= 768) {
    return (
      <StyledLinkWrapper
        onMouseOver={() => hoverOption(image)}
      >
        {children}
      </StyledLinkWrapper>
    );
  }
  else {
    return (
      <StyledLinkWrapper>
        {children}
      </StyledLinkWrapper>
    );
  }
};

const StyledLinkDiv = styled.div`
  width: 100%;
  font-size: 4.5vw;
  line-height: 150%;
  font-family: 'Josefin Sans', Helvetica, sans-serif;
  color: var(--color-link);
  cursor: default;
  @media screen and (max-width: 1920px ) {
    font-size: 4rem;
  }
`;
const LinkObject = ({className, link, children}) => (
  <Link
    to={link}
    className = {className}
  >
    {children}
  </Link>
);
const StyledLink = styled(LinkObject)`
  width: 100%;
  font-size: 4.5vw;
  line-height: 150%;
  font-family: 'Josefin Sans', Helvetica, sans-serif;
  color: var(--color-link);
  cursor: default;
  @media screen and (max-width: 1920px ) {
    font-size: 4rem;
  }
`;
const CheckCurrentPage = ({loadedContent, link, children}) => {
  if (loadedContent === link) {
    return (
      <StyledLinkDiv>
        {children}
      </StyledLinkDiv>
    );
  }
  else {
    return (
      <StyledLink
        link={link}
        children={children}
      />
    );
  }
};

const StyledNumber = styled.div`
  float: left;
  font-size: var(--size-medium);
  transform: rotate(270deg);
`;
const MenuText = ({menuDisplay, loadedContent, hoverOption}) => {
  useEffect(() => {
    Scrollbar.init(document.querySelector('#menu_scrollbar'), {
      alwaysShowTracks: true,
    });
  }, []);
  //empty array '[]' means call it only after initial render

  const menuClassName = classNames(
    'menu_panel__links',
    {
      'menu_panel__links--display': menuDisplay,
    }
  );
  return(
    <div className={menuClassName} id="menu_scrollbar">
      {menuData.map((value) => (
        <div key={value.link}>
          <CheckCurrentPage
            loadedContent={loadedContent}
            link={value.link}
          >
            <LinkDivWrapper
              image={value.image}
              hoverOption={hoverOption}
            >
              <StyledNumber>
                {value.value}
              </StyledNumber>
              <div style={{marginLeft: '1rem'}}>
                {value.text}
              </div>
            </LinkDivWrapper>
          </CheckCurrentPage>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    menuDisplay: selectMenuDisplay(state),
    loadedContent: selectLoadedContent(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hoverOption: (option) => {
      dispatch(menuActions.hoverMenuOption(option));
    }
  };
};

export default connect (mapStateToProps, mapDispatchToProps)(MenuText);
