import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';


const StarsRating = ({rating}) => {
    return (
        <div>
            <Box>
                <Rating
                    readOnly
                    name="customized-10"
                    value={rating}
                    max={10}
                    precision={0.1}

                    sx={{span: {color: '#ffa511', fontSize: '24px'}}}

                />
            </Box>

        </div>
    );
};

export {StarsRating};