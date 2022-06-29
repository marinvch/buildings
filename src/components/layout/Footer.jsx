import React from 'react';
import { AppBar, Toolbar } from "@mui/material";

export const Footer = () => {
    return (
        <AppBar>
            <Toolbar sx={{ background: '#063970' }} style={{ width: "100vw", color: "white", position: "fixed", bottom: 0 }}>
                Copyright 2022 Marin Cholakov
            </Toolbar>
        </AppBar>
    )
}
