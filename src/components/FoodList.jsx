import React, { useEffect, useState } from "react";
import { Options, fetchData } from "./utils/fetchData";
import { Box, Stack, Typography } from "@mui/material";
import Card from "./Card";
import Loader from "./Loader";

const FoodList = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchFoodList = async () => {
      const foodListData = await fetchData(
        "https://api.spoonacular.com/recipes/random?number=100",
        Options
      );

      setFoods(foodListData.recipes);
    };
    fetchFoodList();
  }, []);
  if (!foods) return <Loader />;

  return (
    <Box>
      <Typography variant="h4" p={4} fontWeight="bold">
        Trending
      </Typography>
      <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={3}>
        {foods.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </Stack>
    </Box>
  );
};

export default FoodList;
