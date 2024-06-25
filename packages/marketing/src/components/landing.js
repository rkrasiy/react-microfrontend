import React from "react";
import { Box, Container, Typography } from "@material-ui/core";
import { NavLink } from 'react-router-dom';

const Landing = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Home Page
        </Typography>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/pricing'>Pricing</NavLink>
      </Box>
    </Container>
  )
}

export default Landing;