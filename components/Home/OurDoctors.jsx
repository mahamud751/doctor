import { Phone } from "@mui/icons-material";
import { Container, Grid, Typography } from "@mui/material";
import Image from "next/Image";
import React from "react";
import { default as img, default as img2, default as img3 } from "../../public/images/doctor-small.png";
function OurDoctors() {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Image src={img} />
          <Typography>Dr Modi</Typography>
          <Phone />
        </Grid>
        <Grid item xs={12} md={4}>
          <Image src={img2} />
          <Typography>Dr Modi</Typography>
          <Phone />
        </Grid>
        <Grid item xs={12} md={4}>
          <Image src={img3} />
          <Typography>Dr Modi</Typography>
          <Phone></Phone>
        </Grid>
      </Grid>
    </Container>
  );
}

export default OurDoctors;
