import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import RecipeDetail from "./pages/RecipeDetail";
import Searched from "./pages/Searched";
import SavedItem from "./pages/SavedItem";
import { useState } from "react";

function App() {
  const [savedItems, setSavedItems] = useState([]);

  return (
    <BrowserRouter>
      <Box>
        <Navbar savedItems={savedItems} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/recipe/:id"
            element={
              <RecipeDetail
                setSavedItems={setSavedItems}
                savedItems={savedItems}
              />
            }
          />
          <Route path="/searched/:search" element={<Searched />} />
          <Route
            path="/savedItems"
            element={
              <SavedItem
                savedItems={savedItems}
                setSavedItems={setSavedItems}
              />
            }
          />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
