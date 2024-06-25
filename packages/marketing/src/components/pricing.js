import React from "react";
import { Box, Container, Typography } from "@material-ui/core";
import { NavLink } from 'react-router-dom';

const Pricing = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Pricing Page
        </Typography>
        <NavLink to='/'>Home</NavLink>
      </Box>
    </Container>
  )
}

export default Pricing;