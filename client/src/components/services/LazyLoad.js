import React from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

const LazyLoad = ({children}) => {
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
};

export default LazyLoad;