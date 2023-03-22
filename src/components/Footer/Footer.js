import React from 'react';

import css from './footer.module.css';
import {useSelector} from "react-redux";

const Footer = () => {

    const {themeStatus} = useSelector(state => state.genre);

    return (
        <div className={css.styleFooter}>
            <div className={css.data}>
                <ul>
                    <li>V</li>
                    <li>I</li>
                    <li>T</li>
                    <li>A</li>
                    <li>L</li>
                    <li>I</li>
                    <li>I</li>
                </ul>
            </div>
            <div className={`${themeStatus ? css.socialDark : css.social}`}>
                <a href={'https://github.com/VitaliiKos'}><i className="fa-brands fa-github"></i></a>
                <a href={'https://www.linkedin.com/in/vitalii-kosyk-836b8917a/'}><i
                    className="fa-brands fa-linkedin"></i></a>
                <a href={'https://t.me/KosykV'}><i className="fa-brands fa-telegram"></i></a>
            </div>
        </div>
    );
};

export {Footer};