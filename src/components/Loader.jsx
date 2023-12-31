import { Stack } from "@mui/material";
import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      width="100%"
    >
      <InfinitySpin color="grey" />
    </Stack>
  );
};

export default Loader;
