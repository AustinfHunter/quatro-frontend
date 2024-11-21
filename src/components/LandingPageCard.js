import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

const LandingPageCard = ({ children, image, title, imgRight }) => {
  return (
    <>
      <Card sx={{ width: "100%", height: "10%", margin: "5px" }}>
        <Box display={"flex"} flexDirection={imgRight ? "row-reverse" : "row"}>
          <CardMedia component={"img"} image={image} sx={{ width: "25%" }} />
          <CardContent sx={{ paddingX: "2rem" }}>
            <Typography variant={"h4"}>{title}</Typography>
            {children}
          </CardContent>
        </Box>
      </Card>
    </>
  );
};

export default LandingPageCard;
