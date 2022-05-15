import { useEffect } from "react";
import Background from "components/home/BackgroundMouse";
import Logo from "components/home/Logo";
import Contact from "components/home/Contact";
import { useDispatch } from "react-redux";
import { toggleMenu } from "actions/menu";

export const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleMenu());
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
