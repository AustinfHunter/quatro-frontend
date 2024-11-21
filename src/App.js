import "./App.css";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useReducer } from "react";
import {
  AuthenticationContext,
  AuthenticationDispatchContext,
  AuthenticationReducer,
} from "./contexts/AuthenticationContext";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#e29d1f",
      },
      secondary: {
        main: "#1f63e2",
      },
    },
  });
  const isAuthenticated = localStorage.getItem("quatro-token") !== null;
  const [authenticated, dispatch] = useReducer(
    AuthenticationReducer,
    isAuthenticated,
  );

  return (
    <ThemeProvider theme={theme}>
      <AuthenticationContext.Provider value={authenticated}>
        <AuthenticationDispatchContext.Provider value={dispatch}>
          <Box className="App">
            <NavBar />
            <Box marginTop={"65px"}>
              <ToastContainer position="top-center" />
              <Outlet />
            </Box>
          </Box>
        </AuthenticationDispatchContext.Provider>
      </AuthenticationContext.Provider>
    </ThemeProvider>
  );
}

export default App;
