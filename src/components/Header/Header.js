import React from 'react';
import {NavLink} from "react-router-dom";
import {routersPoint} from "../../routes";

import css from './header.module.css';

const Header = () => {
    return (
        <div className={css.menu}>
            <NavLink to={''}>HOME</NavLink>
            <NavLink to={routersPoint.movies}>MOVIES</NavLink>
        </div>
    );
};

export {Header};