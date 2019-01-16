import React from 'react';
import { connect } from 'react-redux';
import {formValueSelector  } from 'redux-form';

class PreviewImage extends React.Component {
  render() {
    const {
      nameValue,
      subtitleValue,
      image,
      position
    } = this.props;

    const imageStyle={
      backgroundImage: 'url('+{image}+')',
      backgroundPosition: position,
    };

    return (
      <div className="admin_custom_subwrapper">
        <div className="admin_custom_title">
          {nameValue}
        </div>
        <div className="admin_custom_subtitle">
          {subtitleValue}
        </div>
        <div
          className="admin_custom_container"
        >
          <div
            className="admin_custom_image"
            style={imageStyle}
          >
          </div>
        </div>
      </div>
    );
  }
}
const selector = formValueSelector('postImage');// <-- same as form name
export default connect(
  (state, ownProps) => ({
    nameValue: selector(state, 'name'),
    subtitleValue: selector(state, 'subtitle'),
  }),
  dispatch => ({
  }),
)(PreviewImage);