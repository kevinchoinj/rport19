import React, {useEffect} from 'react';
import SiteRoutes from 'routes/SiteRoutes';

const SiteRoutesWrapper = ({location}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <SiteRoutes/>
  );
};

export default SiteRoutesWrapper;