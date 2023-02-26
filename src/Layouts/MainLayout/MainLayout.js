import React from 'react';
import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

import {Footer, Header} from "../../components";
import css from './mainLayout.module.css';

const MainLayout = () => {

    const {themeStatus} = useSelector(state => state.genre);

    return (
        <div className={css.main_wrap}>

            <div>
                <Header/>
            </div>

            <div className={`${css.wrapper} ${themeStatus ? css.wrapperBgDark : css.wrapperBgLight}`}>
                <Outlet/>
            </div>

            <div className={`${css.footer} ${themeStatus ? css.footerBgDark : css.footerBgLight}`}>
                <Footer/>
            </div>
        </div>
    );
};

export {MainLayout};