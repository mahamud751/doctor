import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Doctors Portal
          </Typography>
          <Link href={'/'} passHref  >
            <Typography sx={{ p: 3 }}>Home</Typography>
          </Link>
          <Link href={'/appointments'} passHref  >
            <Typography sx={{ p: 3 }}>Appointment</Typography>
          </Link>
          <Link href={'/login'} passHref>
            <Button color="inherit">Login</Button>
          </Link>

        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
