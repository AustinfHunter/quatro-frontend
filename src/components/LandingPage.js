import { Box, Button, Container, Typography } from "@mui/material";
import { useContext } from "react";
import { AuthenticationContext } from "../contexts/AuthenticationContext";
import Dashboard from "./Dashboard";
import splashImg from "../images/landing.jpg";
import mealPlanImg from "../images/mealplan.jpg";
import oldSplashImg from "../images/splash.jpg";
import dataExampleImage from "../images/data-exm.png";
import journalExampleImage from "../images/Journal-Exmp.png";
import LandingPageCard from "./LandingPageCard";
import { Link } from "react-router-dom";

function LandingPage() {
  const authenticated = useContext(AuthenticationContext);
  if (authenticated) {
    return <Dashboard />;
  } else
    return (
      <Box>
        <div
          style={{
            backgroundImage: `url(${splashImg})`,
            height: "60vh",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
          }}
        >
          <Box width={"40%"} padding={"5%"}>
            <Typography variant={"h4"} fontWeight={"bold"} textAlign={"left"}>
              Tracking your nutrition doesn't have to be hard...
            </Typography>
            <Box width="70%">
              <Typography
                variant={"body1"}
                fontSize={"1.3rem"}
                textAlign={"left"}
              >
                Quatro empowers you to effortlessly track your nutrition,
                monitor your weight goals, and stay on top of your daily
                consumption habits, helping you make informed choices and stay
                on track with your health journey every day.
              </Typography>
              <Box marginTop={"10px"}>
                <Button
                  color={"primary"}
                  size={"large"}
                  variant="contained"
                  component={Link}
                  to={"signup/"}
                >
                  Get Started Now
                </Button>
              </Box>
            </Box>
          </Box>
        </div>
        <Container>
          <Typography variant="h6" textAlign={"left"}></Typography>
          <LandingPageCard image={mealPlanImg} title={"Meal Planning"}>
            <Typography variant={"p"} fontSize={"1.2rem"} textAlign={"left"}>
              Quatro’s meal planning is fully customizable. It takes into
              account your dietary preferences, restrictions, and goals to craft
              a plan that fits your lifestyle—whether you’re vegan, gluten-free,
              or simply trying to eat healthier.
            </Typography>
          </LandingPageCard>
          <LandingPageCard
            image={oldSplashImg}
            title={"Recipe Generator"}
            imgRight
          >
            <Typography variant={"p"} fontSize={"1.2rem"} textAlign={"left"}>
              Get access to delicious, easy-to-follow recipes designed to help
              you stay healthy without sacrificing flavor. Quatro’s recipe
              generator takes the guesswork out of meal planning by providing
              you with balanced, nutritious options you’ll love.
            </Typography>
          </LandingPageCard>
          <LandingPageCard
            image={dataExampleImage}
            title={"Nutritional Insights"}
          >
            <Typography variant={"p"} fontSize={"1.2rem"} textAlign={"left"}>
              Quatro gives you the knowledge you need to make better decisions
              with every meal. Get personalized feedback on your daily intake,
              and understand how small choices can lead to big health
              improvements over time.
            </Typography>
          </LandingPageCard>
          <LandingPageCard
            image={journalExampleImage}
            title={"Journalling and Tracking"}
            imgRight
          >
            <Typography variant={"p"} fontSize={"1.2rem"} textAlign={"left"}>
              Quatro gives you the knowledge you need to make better decisions
              with every meal. Get personalized feedback on your daily intake,
              and understand how small choices can lead to big health
              improvements over time.
            </Typography>
          </LandingPageCard>
        </Container>
      </Box>
    );
}

export default LandingPage;
