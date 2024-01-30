import { Box, IconButton, List, ListItem, Typography } from "@mui/material";
import React from "react";
import "./Footer.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";

const Footer = () => {
  const storeArr = [
    "Become A Member",
    "Student Discounts",
    "Send Us Feedback",
    "Delivery",
  ];
  const helpArr = [
    "Order Status",
    "Order Status",
    "Delivery",
    "Delivery",
    "Delivery",
    "Delivery",
  ];
  const aboutArr = ["News", "Careers", "Careers", "Sustainability"];
  const footerEndArr = [
    "Guides",
    "Terms of Sale",
    "Terms of Use",
    "Nike Privacy Policy",
  ];

  return (
    <Box id="footer">
      <Box className="container">
        <Box className="footer">
          <Box className="footer_nav">
            <Box>
              <Typography sx={{ color: "#fff" }}>Find A Store</Typography>

              <List variant="h5" className="content">
                {storeArr.map((i, index) => (
                  <ListItem sx={{ p: "10px 0" }} key={index}>
                    {i}
                  </ListItem>
                ))}
              </List>
            </Box>
            <Box>
              <Typography sx={{ color: "#fff" }}>Get Help</Typography>

              <List variant="h5" className="content">
                {helpArr.map((i, index) => (
                  <ListItem sx={{ p: "10px 0" }} key={index}>
                    {i}
                  </ListItem>
                ))}
              </List>
            </Box>
            <Box>
              <Typography sx={{ color: "#fff" }}>Get Help</Typography>

              <List variant="h5" className="content">
                {aboutArr.map((i, index) => (
                  <ListItem sx={{ p: "10px 0" }} key={index}>
                    {i}
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
          <Box className="footer_icons">
            <IconButton
              sx={{ background: "#7E7E7E", width: "30px", height: "30px" }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              sx={{ background: "#7E7E7E", width: "30px", height: "30px" }}
            >
              <TwitterIcon />
            </IconButton>

            <IconButton
              sx={{ background: "#7E7E7E", width: "30px", height: "30px" }}
            >
              <TwitterIcon />
            </IconButton>

            <IconButton
              sx={{ background: "#7E7E7E", width: "30px", height: "30px" }}
            >
              <TwitterIcon />
            </IconButton>
          </Box>
        </Box>
        <Box className="corents" sx={{ color: "#fff" }}>
          <Box sx={{ display: "flex", gap: "15px" }}>
            <BloodtypeIcon />
            <Typography sx={{ color: "#7E7E7E" }}>
              © 2023 Nike, Inc. All Rights Reserved
            </Typography>
          </Box>
          <Box
            sx={{
              color: "#7E7E7E",
              display: "flex",
              gap: "30px",
            }}
          >
            {footerEndArr.map((i, index) => (
              <Typography key={index}>{i}</Typography>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
