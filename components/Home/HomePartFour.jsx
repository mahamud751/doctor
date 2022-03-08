import { Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import treatment from "../../public/images/treatment.png";
function HomePartFour() {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Image src={treatment} width={300} height={400} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4">Exceptional Dental Care, on your term</Typography>
          <Typography sx={{ my: 4 }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus ipsum, laborum porro provident maiores rerum quis inventore! Quis quasi, eos
            temporibus voluptatibus laborum quibusdam, voluptates eius magni debitis nulla aspernatur.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomePartFour;
