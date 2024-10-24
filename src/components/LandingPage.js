import {
  Link,
  Paper,
  Typography,
    Box,
    Container
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import NavBar from './NavBar';

const LandingPage = () => {
    return (
        <Paper>
            <NavBar />
            <Container>
                <Typography variant="h2" textAlign={"center"} styles={styles.pageTitle}>
                Quatro
                </Typography>
                <Typography variant="body1" textAlign={"center"} styles={styles.paragraph}>
                    Quatro is a nutrition app that allows users to track their nutrition, weight goals,
                    and daily consumption habits with ease. It can be tough to keep track of daily
                    consumption while also planning meals and making time for exercise. Quatro is designed to make it easy.
                    QuatBot, the Quatro Chatbot, can help you plan meals, make shopping lists, and analyze your eating
                    habits -
                    all according to your personal goals and preferences.
                </Typography>
                <Link component={RouterLink} to={"/login/"}>
                    Log In
                </Link>
            </Container>
        </Paper>
    );
}

const styles = {
    pageTitle: {
        margin: "auto",
        width: "60%",
        padding: "100px"
    },
    paragraph: {
        margin: "auto",
        width: "60%",
        padding: "40px"
    }
}
export default LandingPage