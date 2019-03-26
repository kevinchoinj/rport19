import React from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

class LazyLoad extends React.Component{
  render(){
    const {
      children,
    } = this.props;
    if (window.innerWidth > 768) {
      return(
        <LazyLoadComponent>
          {children}
        </LazyLoadComponent>
      );
    }
    else {
      return children;
    }
  }
}

export default LazyLoad;