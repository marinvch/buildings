import React, { useState } from 'react';
import { Tabs, Tab, } from "@mui/material";
import { AppBar, Toolbar, Typography } from "@mui/material";
import ApartmentIcon from '@mui/icons-material/Apartment';
import { HomePage } from '../../pages/HomePage';
import { BuildingsPage } from '../../pages/BuildingsPage';

export const Navigation = () => {
    const [currentTab, setCurrentTab] = useState(0)

    return (
        <>
            <AppBar sx={{ background: '#063970' }} >
                <Toolbar>
                    <ApartmentIcon />
                    <Typography>Buildings</Typography>
                    <Tabs
                        sx={{ marginLeft: 'auto' }}
                        indicatorColor="primary"
                        textColor="inherit"
                        value={currentTab}
                        onChange={(e, value) => setCurrentTab(value)}
                    >
                        <Tab label='Home Page' />
                        <Tab label='Buildings' />
                    </Tabs>
                </Toolbar>
            </AppBar>
            {currentTab === 0 && <HomePage />}
            {currentTab === 1 && <BuildingsPage />}
        </>


    )
}
