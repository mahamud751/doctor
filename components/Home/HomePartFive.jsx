import { Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import img from "../../public/images/doctor.png";
function HomePartFive() {
  return (
    <Container
      sx={{ my: 20 }}
      style={{ backgroundImage: "url(images/appointment-bg.png)", backgroundColor: "rgba(35,45,55,0.8)", backgroundBlendMode: "darken,luminosity" }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={5}>
          <div style={{ marginTop: "-200px" }}>
            <Image src={img} />
          </div>
        </Grid>
        <Grid item xs={12} md={7}>
          <Typography variant="h5" sx={{ my: 3 }}>
            Appointment
          </Typography>
          <Typography variant="h3" sx={{ my: 3 }}>
            Make an appointment today
          </Typography>
          <Typography variant="h6" sx={{ my: 3 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem a illum odio quo sit dolores magni laborum dolor, obcaecati maxime, nihil molestias
            accusamus quisquam. Cum repudiandae at provident rerum ipsum.
          </Typography>
          <Button variant="contained" sx={{ my: 3 }}>
            Learn more
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomePartFive;
