import React from 'react';
import classNames from 'classnames';

class LoadImage extends React.Component{
  render(){
    const {
      loadDelay,
      isVisible,
      onPageLoad,
      image,
    } = this.props;

    const transitionName = classNames(
      'load_image__container',
      {
        'load_image__container--display': onPageLoad ? true : isVisible,
      }
    );

    const addLoadDelay = {
      animationDelay: loadDelay,
    };

    return(
      <div className={transitionName} style={addLoadDelay}>
        <div className="load_image__mask">
          <img src={image} alt="loading in" className="load_image__image"/>
        </div>
      </div>
    );
  }
}

export default LoadImage;
