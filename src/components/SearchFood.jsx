import { Search } from "@mui/icons-material";
import { Box, IconButton, Paper, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchFood = () => {
  const [search, setSearch] = useState("");

  const navigate = useNavigate()
  const handleSearch = async (e) => {
    e.preventDefault();
    navigate(`/searched/${search}`);
    setSearch("");
  };
  return (
    <Stack alignItems="center" mb={6} mt={2}>
      <Box
        sx={{ position: "relative" }}
        component="form"
        onSubmit={handleSearch}
      >
        <Paper elevation={2}>

        <TextField
       
       
        autoComplete="off"
          type="text"
          placeholder="Search Food"
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
          value={search}
          sx={{
            width: {
              lg: "900px",
              xs: "80vw",
            },

            input: {
              height: "20px",
              fontWeight: "700px",
              border: "none",
            },
          }}
        />
        <IconButton
          type="submit"
          sx={{ position: "absolute", right: "12px", top: "7px",color: 'orange' }}
        >
          <Search />
        </IconButton>
        </Paper>
        <div className="dropdown">
          
        </div>
        
      </Box>
    </Stack>
  );
};

export default SearchFood;
