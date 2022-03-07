import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { React } from "react";
function BannerBottom() {
  const bannerSize = {
    display: "flex",
    alignItems: "center",
  };

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Box style={{ ...bannerSize, backgroundColor: "#1CC7C1" }}>
            <Box sx={{ p: 2 }}>
              <QueryBuilderIcon fontSize="large"></QueryBuilderIcon>
            </Box>
            <Box sx={{ p: 2 }}>
              <Typography variant="h6" style={{ color: "white" }}>
                {" "}
                Opening Hours
              </Typography>
              <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, reprehenderit.</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box style={{ ...bannerSize, backgroundColor: "#3A4256" }}>
            <Box sx={{ p: 2 }}>
              <QueryBuilderIcon fontSize="large"></QueryBuilderIcon>
            </Box>
            <Box sx={{ p: 2 }}>
              <Typography variant="h6" style={{ color: "white" }}>
                {" "}
                Opening Hours
              </Typography>
              <Typography style={{ color: "white" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, reprehenderit.</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box style={{ ...bannerSize, backgroundColor: "#1CC7C1" }}>
            <Box sx={{ p: 2 }}>
              <QueryBuilderIcon fontSize="large"></QueryBuilderIcon>
            </Box>
            <Box sx={{ p: 2 }}>
              <Typography variant="h6" style={{ color: "white" }}>
                {" "}
                Opening Hours
              </Typography>
              <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, reprehenderit.</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default BannerBottom;
