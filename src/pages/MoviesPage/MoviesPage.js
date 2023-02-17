import React from 'react';
import {Outlet} from "react-router-dom";

const MoviesPage = () => {
    return (
        <div>
            MoviesPage
            <Outlet/>
            
        </div>
    );
};

export {MoviesPage};