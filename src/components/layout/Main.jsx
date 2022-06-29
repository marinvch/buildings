import React from 'react';
import { useSelector } from 'react-redux';

export const Main = () => {
    const buildings = useSelector((state) => state.buildings);
    console.log(buildings);

    return (
        <div>Main</div>
    )
}
