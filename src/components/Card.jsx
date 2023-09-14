import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const { title, image, id } = data;

  return (
    <Box>
      <Link to={`/recipe/${id}`} className="food-card">
        <img src={image} alt={title} loading="lazy" />

        <Typography
          gutterBottom
          variant="body2"
          color="black"
          className="card-title"
          sx={{
            textAlign: "center",
            border: "1px solid black",
            padding: "10px",
            borderRadius: "20px",
            mt: "5px",
          }}
        >
          {title}
        </Typography>
      </Link>
    </Box>
  );
};

export default Card;
