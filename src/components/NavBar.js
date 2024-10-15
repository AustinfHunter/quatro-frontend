import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <Button color={"inherit"} variant="text" component={Link} to={"/"}>
            Home
          </Button>
          <Button
            color={"inherit"}
            variant="text"
            component={Link}
            to={"login/"}
          >
            Log In
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
