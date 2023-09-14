import { Box, IconButton, Stack, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Navbar = ({ savedItems }) => {
  const navigate = useNavigate();
  const goToSavedPage = () => {
    navigate("./savedItems");
  };

  return (
    <Stack
      direction="row"
      p={1}
      sx={{ background: "orange", opacity: ".8" }}
      justifyContent="space-between"
    >
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <Typography variant="h6" fontWeight="bold">
          Delicious
        </Typography>
      </Link>
      <Box sx={{ position: "relative" }}>
        <IconButton sx={{ color: "white" }} onClick={goToSavedPage}>
          <FavoriteBorderIcon />
        </IconButton>
        <Box
          sx={{
            position: "absolute",
            bottom: "0",
            right: "0",
            background: "darkorange",
            border: "1px solid black",
            padding: "1px",
            width: "19px",
            height: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            color: "white",
            
          }}
        >
          <Typography variant="subtaitle1" >{savedItems.length}</Typography>
        </Box>
      </Box>
    </Stack>
  );
};

export default Navbar;
