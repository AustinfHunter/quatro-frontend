import { CircularProgress } from "@mui/material";
import { useContext, useEffect } from "react";
import { AuthenticationDispatchContext } from "../contexts/AuthenticationContext";

const Logout = () => {
  const dispatch = useContext(AuthenticationDispatchContext);

  useEffect(() => {
    dispatch({ type: "logout" });
  });

  return <CircularProgress variant="indeterminate" />;
};

export default Logout;
