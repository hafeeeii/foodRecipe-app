import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Loader from "../components/Loader";

const SavedItem = ({ savedItems, setSavedItems }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const savedItemsJSON = JSON.stringify(savedItems);
    localStorage.setItem("savedItems", savedItemsJSON);
  }, [savedItems]);

  useEffect(() => {
    const savedItemsJSON = localStorage.getItem("savedItems");

    const savedItemsFromStorage = JSON.parse(savedItemsJSON) || [];

    if (savedItemsFromStorage) {
      setSavedItems(savedItemsFromStorage);
      setIsLoading(false);
    }
  }, []);

  return (
    <Box sx={{ p: { xs: "10px", lg: "20px" } }}>
      <Typography variant="h5" fontWeight="bold" textAlign="center" mb={3}>
        Saved
      </Typography>
      {isLoading ? (
        <Loader />
      ) : (
        <Stack direction="row" flexWrap="wrap" gap={4} justifyContent="center">
          {savedItems.map((item) => (
            <Card data={item} key={item.id} />
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default SavedItem;
