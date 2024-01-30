import React from "react";
import "./ShoesTop.css";
import { Box, Typography } from "@mui/material";

const ShoesTop = () => {
  return (
    <Box id="shoes_top">
      <Box className="container">
        <Box className="shoes_top">
          <Typography variant="h5">Shoes(999)</Typography>
          <Box className="shoes_sort">
            <Typography>Hide Filters</Typography>
            <Typography>Sort By</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ShoesTop;
