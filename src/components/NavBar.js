import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import {
  AuthenticationContext,
  AuthenticationDispatchContext,
} from "../contexts/AuthenticationContext";

const LoginLogoutButton = () => {
  const authenticated = useContext(AuthenticationContext);
  const dispatch = useContext(AuthenticationDispatchContext);
  if (authenticated) {
    return (
      <Button
        color={"inherit"}
        variant="text"
        component={Link}
        to={"/"}
        onClick={() => dispatch({ type: "logout" })}
      >
        Logout
      </Button>
    );
  }
  return (
    <Button color={"inherit"} variant="text" component={Link} to={"login/"}>
      Login
    </Button>
  );
};

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <Button color={"inherit"} variant="text" component={Link} to={"/"}>
            Home
          </Button>
          <LoginLogoutButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
