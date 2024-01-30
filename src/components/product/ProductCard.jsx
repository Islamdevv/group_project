import { Box } from "@mui/material";
import React from "react";
import "./ProductCard.css";
const ProductCard = () => {
  return (
    <Box className="container">
      <Box
        sx={{
          position: "static",
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "15px",
          overflowY: "scroll",
          height: "100vh",
        }}
      >
        <Box sx={{ width: "260px", height: "260px", background: "gray" }}></Box>
        <Box sx={{ width: "260px", height: "260px", background: "gray" }}></Box>
        <Box sx={{ width: "260px", height: "260px", background: "gray" }}></Box>
        <Box sx={{ width: "260px", height: "260px", background: "gray" }}></Box>
        <Box sx={{ width: "260px", height: "260px", background: "gray" }}></Box>
        <Box sx={{ width: "260px", height: "260px", background: "gray" }}></Box>
        <Box sx={{ width: "260px", height: "260px", background: "gray" }}></Box>
        <Box sx={{ width: "260px", height: "260px", background: "gray" }}></Box>
        <Box sx={{ width: "260px", height: "260px", background: "gray" }}></Box>
        <Box sx={{ width: "260px", height: "260px", background: "gray" }}></Box>
        <Box sx={{ width: "260px", height: "260px", background: "gray" }}></Box>
        <Box sx={{ width: "260px", height: "260px", background: "gray" }}></Box>
      </Box>
    </Box>
  );
};

export default ProductCard;
