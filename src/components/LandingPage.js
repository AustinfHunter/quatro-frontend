import {
  Link,
  Paper,
  Typography,
} from "@mui/material";
import { Link as RouterLink} from "react-router-dom";

return (
    <Paper>
      <Typography variant="h2" textAlign={"center"}>
        Quatro
      </Typography>
      <Typography variant="body1" textAlign={"center"}>
        Quatro is a nutrition app that allows users to track their nutrition, weight goals,
          and daily consumption habits with ease. It can be tough to keep track of daily
          consumption while also planning meals and making time for exercise. Quatro is designed to make it easy.
          QuatBot, the Quatro Chatbot, can help you plan meals, make shopping lists, and analyze your eating habits -
          all according to your personal goals and preferences.
      </Typography>
        <Link component={RouterLink} to={"/login/"}>
            Log In
        </Link>
    </Paper>
)