import React from 'react';
import classNames from 'classnames';
import {connect} from 'react-redux';

class PageLoading extends React.Component {

  render() {
    const {
      pageLoaded,
    } = this.props;

    const loadingName = classNames(
      'loading_background',
      {
        'loading_background--hidden': pageLoaded,
      }
    );

    return (
      <div className={loadingName}>
        <div className="load-9">
          <div className="spinner">
            <div className="bubble-1"></div>
            <div className="bubble-2"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    pageLoaded: state.menu.isLoaded
  }),
)(PageLoading);
