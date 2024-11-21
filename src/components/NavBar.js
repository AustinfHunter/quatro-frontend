import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import {
  AuthenticationContext,
  AuthenticationDispatchContext,
} from "../contexts/AuthenticationContext";
import logo from "../images/logo.png";

const AuthenticatedButtons = () => {
  const authenticated = useContext(AuthenticationContext);
  const dispatch = useContext(AuthenticationDispatchContext);
  if (authenticated) {
    return (
      <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
        <Box>
          <Button color={"inherit"} variant="text" component={Link} to={"/"}>
            Dashboard
          </Button>
          <Button
            color={"inherit"}
            variant="text"
            component={Link}
            to={"/profile"}
          >
            Profile
          </Button>
          <Button
            color={"inherit"}
            variant="text"
            component={Link}
            to={"/managefoods"}
          >
            Manage Foods
          </Button>
          <Button
            color={"inherit"}
            variant="text"
            component={Link}
            to={"/quatbot"}
          >
            QuatBot
          </Button>
        </Box>
        <Box>
          <Button
            color={"inherit"}
            variant="text"
            component={Link}
            to={"/"}
            onClick={() => dispatch({ type: "logout" })}
          >
            Logout
          </Button>
        </Box>
      </Box>
    );
  }
  return (
    <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
      <Button
        color={"inherit"}
        size={"large"}
        variant="text"
        component={Link}
        to={"/"}
      >
        Home
      </Button>
      <Button
        color={"inherit"}
        size={"large"}
        variant="text"
        component={Link}
        to={"login/"}
      >
        Login
      </Button>
    </Box>
  );
};

const NavBar = () => {
  return (
    <Box>
      <AppBar>
        <Container>
          <Toolbar>
            <img src={logo} alt={"quatro logo"} style={{ maxHeight: "80px" }} />
            <AuthenticatedButtons />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default NavBar;
