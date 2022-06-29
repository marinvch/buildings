import React, { useState } from 'react'
import { Tabs, Tab } from "@mui/material";

export const Navigation = () => {
    const [currentTab, setCurrentTab] = useState(0);

    return (
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
    )
}
