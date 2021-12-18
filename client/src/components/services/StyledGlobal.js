import React from "react";
import {connect} from "react-redux";
import { createGlobalStyle } from "styled-components";
import {selectMenuDisplay} from "reducers";

const GlobalStyle = createGlobalStyle`
  body {
    @media screen and (max-width: 992px) {
      overflow-y: ${props => (props.menuDisplay ? "hidden" : "auto")};
    }
  }
`;

const StyleGlobal = ({menuDisplay}) => {
  return (
    <GlobalStyle menuDisplay={menuDisplay}/>
  );
};

const mapStateToProps = (state) => {
  return {
    menuDisplay: selectMenuDisplay(state),
  };
};

export default connect(mapStateToProps, null)(StyleGlobal);