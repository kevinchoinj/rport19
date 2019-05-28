import React from 'react';
import { connect } from 'react-redux';

const PageLoading = ({pageLoaded}) => {
  return (
    <div className="loading_background">
      <div className="load-9">
        <div className="spinner">
          <div className="bubble-1"></div>
          <div className="bubble-2"></div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    pageLoaded: state.menu.isLoaded,
  };
};

export default connect (mapStateToProps, null)(PageLoading);
