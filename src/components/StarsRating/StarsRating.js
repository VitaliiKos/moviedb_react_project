import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

import css from './starRating.module.css';


const StarsRating = ({rating}) => {
    return (
        <div className={css.movieRating}>
            <Box>
                <Rating
                    readOnly
                    name="customized-10"
                    value={rating}
                    max={10}
                    precision={0.1}

                    sx={{span: {color: '#ffa511'}}}

                />
            </Box>

        </div>
    );
};

export {StarsRating};