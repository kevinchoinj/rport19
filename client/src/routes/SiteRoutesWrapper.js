import React, { useEffect } from 'react';
import SiteRoutes from 'routes/SiteRoutes';
import { useLocation } from 'react-router-dom';

const SiteRoutesWrapper = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <SiteRoutes />
  );
};

export default SiteRoutesWrapper;