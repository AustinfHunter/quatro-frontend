import { Link, Paper, Typography } from "@mui/material";
import { useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import { AuthenticationContext } from "../contexts/AuthenticationContext";
import Dashboard from "./Dashboard";

function LandingPage() {
  const authenticated = useContext(AuthenticationContext);
  if (authenticated) {
    return <Dashboard />;
  }

  return (
    <Paper style={{ width: "80%", margin: "auto", padding: "20px" }}>
      <Typography variant="h2" textAlign={"center"}>
        Quatro
      </Typography>
      <Typography variant="body1" textAlign={"center"}>
        Quatro is a nutrition app that allows users to track their nutrition,
        weight goals, and daily consumption habits with ease. It can be tough to
        keep track of daily consumption while also planning meals and making
        time for exercise. Quatro is designed to make it easy. QuatBot, the
        Quatro Chatbot, can help you plan meals, make shopping lists, and
        analyze your eating habits - all according to your personal goals and
        preferences.
      </Typography>
    </Paper>
  );
}

export default LandingPage;
