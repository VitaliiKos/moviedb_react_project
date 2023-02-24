import React from 'react';

import css from './pageNotFound.module.css';

const PageNotFound = () => {
    return (
        <div className={css.font}>
            <h2>Page Not Found</h2>

            <h3>We couldn't find what you were looking for.</h3>

            <p>
                Please contact the owner of the site that linked you to the original URL and let them know their link is
                broken.
            </p>
        </div>
    );
};

export {PageNotFound};