import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

const LandingPageCard = ({ children, image, title, imgRight }) => {
  return (
    <>
      <Card
        sx={{
          width: "100%",
          minHeight: "12%",
          maxHeight: "12%",
          margin: "5px",
          marginY: "20px",
        }}
      >
        <Box display={"flex"} flexDirection={imgRight ? "row-reverse" : "row"}>
          <CardMedia component={"img"} image={image} sx={{ width: "30%" }} />
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
