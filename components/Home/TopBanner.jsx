import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import React from "react";
import img from "../../public/images/chair.png";
function TopBanner() {
  const bannerSize = {
    display: "flex",
    alignItems: "center",
    height: 600,
  };
  return (
    <Container>
      <Grid container spacing={2} style={{ backgroundImage: "url(images/bg.png)" }}>
        <Grid item xs={12} md={6} style={{ ...bannerSize, padding: "20px" }}>
          <Box>
            <Typography variant="h3" sx={{ my: 3 }}>
              Your New Smile Start Here
            </Typography>
            <Typography variant="h5" sx={{ my: 3 }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit hic vitae non et deserunt necessitatibus? Nostrum quisquam porro eius magnam?
            </Typography>
            <Button variant="contained">Appointment Here</Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} style={bannerSize}>
          <Image src={img} width={400} height={400} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default TopBanner;
