import React from 'react';
import {Outlet} from "react-router-dom";

import {Footer, Header} from "../../components";
import css from './mainLayout.module.css';

const MainLayout = () => {
    return (
        <div>
            <Header/>

            <div className={css.wrapper}>
                <Outlet/>
            </div>

            <Footer/>
        </div>
    );
};

export {MainLayout};