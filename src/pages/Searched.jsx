import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Options, fetchData } from "../components/utils/fetchData";
import { Box, Stack } from "@mui/material";
import Card from "../components/Card";
import SearchFood from "../components/SearchFood";
import Loader from "../components/Loader";

const Searched = () => {
  const [searchDetails, setSearchDetails] = useState();
  const { search } = useParams();
  useEffect(() => {
    const fetchSearchData = async () => {
      const searchData = await fetchData(
        `https://api.spoonacular.com/recipes/complexSearch?query=${search}&number=100`,
        Options
      );
      setSearchDetails(searchData.results);
    };
    fetchSearchData();
  }, [search]);
  if (!searchDetails) return <Loader />;
  return (
    <Box>
      <SearchFood />
      <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={3}>
        {searchDetails.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </Stack>
    </Box>
  );
};

export default Searched;
