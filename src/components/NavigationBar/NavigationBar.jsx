import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import logo from "../../image/jordan.png";
import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <Box id="navigation_bar">
      <Box className="container">
        <Box className="navigation_bar">
          <Avatar
            sx={{ width: "30px", height: "30px", p: 0, m: 0 }}
            alt="Jordan"
            src={logo}
          />
          <Box className="nav">
            <Typography>Find a Store</Typography>
            <Typography>|</Typography>
            <Typography>Help </Typography>
            <Typography>|</Typography>
            <Typography>Join Us</Typography>
            <Typography>|</Typography>
            <Typography>Sign In</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NavigationBar;
