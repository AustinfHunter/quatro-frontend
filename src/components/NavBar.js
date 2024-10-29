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


const ProfileButton = () => {
  const authenticated = useContext(AuthenticationContext);

  if (authenticated) {
    return (
        <Button
          color={"inherit"}
          variant="text"
          component={Link}
          to={"/profile/"}
        >
          Profile
        </Button>
    )
  }
};

const HomeButton = () => {
  const authenticated = useContext(AuthenticationContext);

  if (!authenticated) {
    return (
        <Button
            color={"inherit"}
            variant="text"
            component={Link}
            to={"/landingpage/"}
          >
            Home
        </Button>
    )
  }
};

const DashboardButton = () => {
  const authenticated = useContext(AuthenticationContext);

  if (authenticated) {
    return (
        <Button
          color={"inherit"}
          variant="text"
          component={Link}
          to={"/dashboard/"}
        >
          Dashboard
        </Button>
    )
  }
}

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <HomeButton />
          <DashboardButton />
          <ProfileButton />
          <LoginLogoutButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
