import "./App.css";
import { Box } from "@mui/material";
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
  const isAuthenticated = localStorage.getItem("quatro-token") !== null;
  const [authenticated, dispatch] = useReducer(
    AuthenticationReducer,
    isAuthenticated,
  );

  return (
    <AuthenticationContext.Provider value={authenticated}>
      <AuthenticationDispatchContext.Provider value={dispatch}>
        <Box className="App">
          <NavBar />
          <Box marginTop={"80px"}>
            <ToastContainer position="top-center" />
            <Outlet />
          </Box>
        </Box>
      </AuthenticationDispatchContext.Provider>
    </AuthenticationContext.Provider>
  );
}

export default App;
