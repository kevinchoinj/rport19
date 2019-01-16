import React from 'react';
import LoadIn from 'components/LoadIn';

export default class About extends React.Component {
  render() {
    const {
      isVisible,
    } = this.props;

    return (
      <div className="project_about">
        <div className="project_smallfont about_title">
          <LoadIn
            isVisible = {isVisible}
          >
            ABOUT
          </LoadIn>
        </div>
        <div className="about_body">
          <LoadIn
            isVisible = {isVisible}
            loadDelay=".2s"
          >
            {this.props.children}
          </LoadIn>
        </div>
      </div>
    );
  }
}
