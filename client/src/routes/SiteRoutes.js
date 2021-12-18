import React, { Suspense } from "react";

import { Outlet } from "react-router-dom";

import MenuPanel from "menu9/MenuPanel";
import MenuButton from "menu9/MenuButton";
// import BackgroundImageWrapper from 'menu9/BackgroundImageWrapper';
import StyledGlobal from "components/services/StyledGlobal";

const BackgroundImageWrapper = React.lazy(() => import("menu9/BackgroundImageWrapper"));

const SiteRoutes = () => {
  /* key prop rerenders component when it is the same component being used between routes */
  return (
    <>
      <Suspense fallback={null}>
        <BackgroundImageWrapper />
      </Suspense>
      <StyledGlobal />
      <Outlet />
      <MenuPanel />
      <MenuButton />
    </>
  );
};

export default SiteRoutes;