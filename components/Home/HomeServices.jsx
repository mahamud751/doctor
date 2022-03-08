import { Card, Container, Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
import { React } from "react";
import img1 from "../../public/images/cavity.png";
import img from "../../public/images/fluoride.png";
import img2 from "../../public/images/whitening.png";
function HomeServices() {
  const bannerSize = {
    display: "flex",
    alignItems: "center",
  };
  return (
    <Container sx={{ my: 6 }}>
      <Typography variant="h5" style={{ textAlign: "center" }}>
        Our Services
      </Typography>
      <Typography variant="h2" style={{ textAlign: "center" }}>
        Services We Provide
      </Typography>
      <Grid container spacing={3} sx={{ my: 8 }}>
        <Grid item xs={12} md={4}>
          <Card sx={{ minWidth: 275 }} style={{ boxShadow: "none" }}>
            <Paper elevation={0} style={{ textAlign: "center" }}>
              <Image src={img}

              />
              <Typography>Fluride TreatMent</Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda non, eligendi perferendis consequatur voluptatum debitis ex nulla illum fuga
                doloribus.
              </Typography>
            </Paper>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ minWidth: 275 }} style={{ boxShadow: "none" }}>
            <Paper elevation={0} style={{ textAlign: "center" }}>
              <Image src={img1}
              />
              <Typography>Cavity TreatMent</Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda non, eligendi perferendis consequatur voluptatum debitis ex nulla illum fuga
                doloribus.
              </Typography>
            </Paper>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ minWidth: 275 }} style={{ boxShadow: "none" }}>
            <Paper elevation={0} style={{ textAlign: "center" }}>
              <Image src={img2}
              />
              <Typography>Whitening TreatMent</Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda non, eligendi perferendis consequatur voluptatum debitis ex nulla illum fuga
                doloribus.
              </Typography>
            </Paper>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomeServices;
