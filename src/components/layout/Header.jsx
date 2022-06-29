import React from 'react'
import { AppBar, Toolbar,Typography } from "@mui/material";
import ApartmentIcon from '@mui/icons-material/Apartment';
import { Navigation } from '../navigation/Navigation';

export const Header = () => {
  return (

    <AppBar sx={{ background: '#063970' }} >
      <Toolbar>
        <ApartmentIcon />
        <Typography>Buildings</Typography>
        <Navigation />
      </Toolbar>
    </AppBar>

  )
}
