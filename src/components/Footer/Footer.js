import React from 'react';

import css from './footer.module.css';

const Footer = () => {
    return (
        <div className={css.styleFooter}>
            <div className={css.data}>
                <h3>02.26.2023</h3>
            </div>
            <div className={css.social}>
                <a href={'https://github.com/VitaliiKos'}><i className="fa-brands fa-github"></i></a>
                <a href={'https://www.linkedin.com/in/vitalii-kosyk-836b8917a/'}><i
                    className="fa-brands fa-linkedin"></i></a>
                <a href={'https://t.me/KosykV'}><i className="fa-brands fa-telegram"></i></a>
            </div>
        </div>
    );
};

export {Footer};