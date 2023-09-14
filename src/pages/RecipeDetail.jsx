import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Detail from "../components/Detail";
import { useParams } from "react-router-dom";
import { Options, fetchData } from "../components/utils/fetchData";

const RecipeDetail = ({ setSavedItems, savedItems }) => {
  const [foodDetail, setFoodDetail] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchFoodDetails = async () => {
      const spoonacularUrl = "https://api.spoonacular.com";
      const foodDetailData = await fetchData(
        `${spoonacularUrl}/recipes/${id}/information`,
        Options
      );
      setFoodDetail(foodDetailData);
    };
    fetchFoodDetails();
  }, [id]);
  return (
    <Box>
      <Detail
        foodDetail={foodDetail}
        setSavedItems={setSavedItems}
        savedItems={savedItems}
      />
    </Box>
  );
};

export default RecipeDetail;
