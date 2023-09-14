import { Box } from "@mui/material";
import Hero from "../components/Hero";
import FoodList from "../components/FoodList";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Box>
      <Hero />
      <FoodList />
      <Footer />
    </Box>
  );
};

export default Home;
