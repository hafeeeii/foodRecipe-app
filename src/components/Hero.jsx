import { Box } from "@mui/material";
import React from "react";
import SearchFood from "./SearchFood";

const Hero = () => {
  return (
    <Box>
      <Box sx={{ position: "relative" }}>
        <img
          src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="banner"
          style={{
            height: "400px",
            width: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <SearchFood />
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
