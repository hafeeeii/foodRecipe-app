import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="orange" height={333} sx={{display:'flex' ,alignItems:'center',justifyContent:'center'}}>
      <Typography
        variant="h5"
        sx={{ fontSize: { lg: "18px", xs: "10px" } }}
        mt="41px"
        textAlign="center"
        pb="40px"
      >
        Copyright &#169; 2023 K Hafis. All Rights Reserved.
      </Typography>
    </Box>
  )
}

export default Footer