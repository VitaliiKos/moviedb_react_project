import React from 'react';
import {useNavigate} from "react-router-dom";
import {styled} from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import {useSelector} from "react-redux";

import {imageUrl} from "../../config";
import css from './movieDetail.module.css';
import {StarsRating} from "../StarsRating/StarsRating";
import {ActorList} from "../ActorsList/ActorList";

const MovieDetail = ({current_movie}) => {
    const {themeStatus} = useSelector(state => state.genre);
    const navigate = useNavigate();
    const {
        id,
        revenue,
        budget,
        genres,
        homepage,
        overview,
        popularity,
        backdrop_path,
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
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '5px 5px',
            width: 'max-content',
            cursor: 'pointer',
            paddingBlock: '10px'
        },
    }));
    const sectionStyle = {
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${imageUrl + backdrop_path})`
    };
    return (

        <div className={css.movieContent}>
            {
                current_movie &&
                <div style={sectionStyle} className={css.moviePoster}>
                    <div className={`${css.bgDescribe} ${themeStatus ? css.bgDescribeDark : css.bgDescribeLight}`}>
                        <div className={css.movie_title}>
                            <h3>{title}</h3>
                        </div>
                        <div className={css.movie_describe}>
                            <div className={css.genre}>{genres.map(genre =>
                                <div onClick={() => navigate(`/movies?with_genres=${genre.id}&page=1`)}
                                     className={css.movie_describe_genre} key={genre.id}>
                                    <div className={css.badge}>
                                        <StyledBadge badgeContent={genre.name}/>
                                    </div>
                                </div>
                            )}
                            </div>

                            <div className={css.movieTextDescribe}>
                                <div className={css.moviePopularity}>
                                    <i className="fa-solid fa-fire"></i>
                                    <span>{popularity}</span>
                                </div>

                                <div className={css.movieBudget}>
                                    <i className="fa-solid fa-sack-dollar"></i>
                                    <span>{budget}</span>
                                    <i className="fa-solid fa-dollar-sign"></i>
                                </div>
                                <div className={css.movieBudget}>
                                    <i className="fa-solid fa-sack-dollar"></i>
                                    <span>{revenue}</span>
                                    <i className="fa-solid fa-dollar-sign"></i>
                                </div>
                                <div className={css.release}>
                                    <i className="fa-solid fa-calendar-days"></i>
                                    <span>{release_date}</span>
                                </div>
                                <div className={css.movieRunTime}>
                                    <i className="fa-solid fa-clock"></i>
                                    <span>{runtime}</span>
                                </div>
                                <div className={css.movieVote}>
                                    <i className="fa-sharp fa-solid fa-check-to-slot"></i>
                                    <span>{vote_count}</span>
                                </div>
                            </div>

                            <div className={css.movieRating}>
                                <div>
                                    <StarsRating rating={vote_average}/>
                                </div>
                                <div className={css.homePageLink}>
                                    <a href={homepage}>{homepage}</a>
                                </div>
                            </div>

                        </div>
                        <div className={css.overview}>
                            <h3><em>{overview}</em></h3>
                        </div>
                    </div>
                </div>
            }
            {
                (trailerIndex > false) &&
                <div className={css.trailer}>
                    <iframe width="640" height="360" title={results[trailerIndex].key}
                            src={`https://www.youtube.com/embed/${results[trailerIndex].key}`} frameBorder="0"></iframe>
                </div>
            }
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