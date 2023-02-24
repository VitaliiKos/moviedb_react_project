import React from 'react';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import {useNavigate} from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import {styled} from "@mui/material/styles";
import Badge from "@mui/material/Badge";

import {imageUrl} from "../../config";
import css from './movieDetail.module.css';
import {StarsRating} from "../StarsRating/StarsRating";
import {ActorList} from "../ActorsList/ActorList";

const MovieDetail = ({current_movie}) => {

    const navigate = useNavigate();
    const {
        id,
        budget,
        genres,
        homepage,
        overview,
        popularity,
        poster_path,
        videos: {results},
        release_date,
        runtime,
        title,
        vote_average,
        vote_count,
    } = current_movie;

    const trailerIndex = results.findIndex(value => value.type.toLowerCase() === 'trailer');

    const StyledBadge = styled(Badge)(({theme}) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: -6,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
            width: 'max-content'
        },
    }));
    return (

        <div className={css.movieContent}>
            {
                current_movie &&
                <>
                    <div className={css.movie_title}>
                        <h3>{title} ({release_date})</h3>
                    </div>
                    <div className={css.poster}>
                        <img src={`${imageUrl}/${poster_path}`} alt={title}/>
                    </div>

                    <div className={css.movie_describe}>
                        <div className={css.genre}>{genres.map(genre =>
                            <div onClick={() => navigate(`/movies?with_genres=${genre.id}&page=1`)}
                                 className={css.movie_describe_genre} key={genre.id}>

                                <IconButton aria-label="cart">
                                    <StyledBadge badgeContent={genre.name} color="secondary">
                                        <MovieFilterIcon sx={{color: '#3090cc', fontSize: 40}}/>
                                    </StyledBadge>
                                </IconButton>
                            </div>
                        )}</div>
                        <h3>{popularity}</h3>
                        <div>
                            <i className="fa-solid fa-sack-dollar">{budget}</i>
                            <i className="fa-solid fa-dollar-sign"></i>
                        </div>
                        <h3>{homepage}</h3>
                        <h3>{release_date}</h3>
                        <div>
                            <i className="fa-solid fa-clock">{runtime}</i>
                        </div>
                        <h3>{vote_count}</h3>
                        <div>
                            <StarsRating rating={vote_average}/>
                        </div>
                    </div>
                    <h3>{overview}</h3>
                </>
            }
            <div>
                <iframe width="640" height="360" title={results[trailerIndex].key}
                        src={`https://www.youtube.com/embed/${results[trailerIndex].key}`} frameBorder="0"></iframe>
            </div>
            <div>
                {
                    id &&
                    <ActorList movieId={id}/>
                }
            </div>
        </div>
    );
};

export {MovieDetail};