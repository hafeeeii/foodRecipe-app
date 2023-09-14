import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import SearchFood from "./SearchFood";
import Loader from "./Loader";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Detail = ({ foodDetail, setSavedItems, savedItems }) => {
  const { title, summary, image, extendedIngredients, instructions, id } =
    foodDetail;

  const [showDescription, setShowDescription] = useState(true);
  const isClicked = savedItems.some((item) => item.id === id);
  const addToSaved = (item) => {
    if (isClicked) {
      const updateSavedItems = savedItems.filter((item) => item.id !== id);
      setSavedItems(updateSavedItems);
    } else {
      setSavedItems([...savedItems, item]);
    }
    const isItemAlreadySaved = savedItems.some(
      (savedItem) => savedItem.id === item.id
    );
    if (!isItemAlreadySaved) {
      setSavedItems([...savedItems, item]);
    }
  };

  const handleSaveClick = () => {
    addToSaved(foodDetail);
  };

  if (!extendedIngredients) return <Loader />;

  return (
    <Box>
      <SearchFood />
      <Stack
        sx={{
          flexDirection: { lg: "row" },
          gap: "40px",
          p: { lg: "90px 150px", xs: "20px" },
        }}
      >
        <Box>
          <Typography variant="h6" fontWeight="bold" sx={{ width: "350px" }}>
            {title}
          </Typography>

          <img
            src={image}
            alt={title}
            style={{ width: "350px", height: "250px" }}
          />
        </Box>

        <Stack gap={2}>
          <Box>
            <Button
              variant="text"
              onClick={() => setShowDescription(true)}
              disabled={showDescription}
              sx={{
                border: "1px solid black",
                color: "black",
                mr: "7px",
              }}
            >
              Description
            </Button>

            <Button
              variant="text"
              onClick={() => setShowDescription(false)}
              disabled={!showDescription}
              sx={{ border: "1px solid black", color: "black" }}
            >
              Ingredients
            </Button>
            <IconButton
              sx={{ color: isClicked ? "orange" : "grey" }}
              onClick={handleSaveClick}
            >
              <FavoriteIcon fontSize="medium" />
            </IconButton>
          </Box>
          {showDescription ? (
            <>
              <Typography variant="h6" fontWeight="bold">
                Description
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontWeight: "600", opacity: ".9", width: "97%" }}
                dangerouslySetInnerHTML={{ __html: summary }}
              />
            </>
          ) : (
            <>
              <Typography variant="h6" fontWeight="bold">
                Ingredients
              </Typography>

              <Typography variant="body1" style={{ opacity: ".9" }}>
                {extendedIngredients.map((item) => (
                  <li key={item.id}>{item?.original}</li>
                ))}
              </Typography>
            </>
          )}
        </Stack>
      </Stack>

      <Stack sx={{ padding: { lg: "0 70px", xs: "0 30px" } }}>
        <Typography variant="h5" fontWeight="bold" mb={1}>
          Instructions
        </Typography>
        <Typography
          variant="subtitle1"
          dangerouslySetInnerHTML={{ __html: instructions }}
        />
      </Stack>
    </Box>
  );
};

export default Detail;
