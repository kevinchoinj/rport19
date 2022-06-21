import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProjects } from "reducers/projects";

const GetMiscProjects = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);
  return null;
};

export default GetMiscProjects;
