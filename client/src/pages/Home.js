import { useEffect } from "react";
import Background from "components/home/BackgroundMouse";
import Logo from "components/home/Logo";
import Contact from "components/home/Contact";
import { useDispatch } from "react-redux";
import { setMenuDisplay } from "reducers/menu";

export const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setMenuDisplay(null));
  }, [dispatch]);

  return (
    <>
      <Background />
      <Logo />
      <Contact />
    </>
  );
};

export default Home;
