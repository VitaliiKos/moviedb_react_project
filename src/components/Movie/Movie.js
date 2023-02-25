import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {StarsRating} from "../StarsRating/StarsRating";
import {imageUrl} from "../../config";
import css from './movie.module.css';
import {favoriteActions} from "../../redux";

const Movie = ({movie}) => {

    const dispatch = useDispatch();
    const {favoriteMovies, favoriteCount} = useSelector(state => state.favorite);
    const {
        id,
        popularity,
        poster_path,
        release_date,
        title,
        overview,
        vote_average,
        vote_count,
    } = movie;
    const favorite_status = favoriteMovies ? id in favoriteMovies : false

    useEffect(() => {

    }, [favoriteMovies, favoriteCount, favorite_status])

    return (
        <>
            <div className={css.movie_wrap}>

                <div className={css.posterTitle}>
                    <h3>{title}</h3>
                    <StarsRating rating={vote_average}/>
                </div>

                <div className={css.shortPosterBox}>
                    <div className={css.play}>
                        <i className="fa-solid fa-circle-play"></i>

                    </div>
                    <NavLink to={`${id}`} className={css.posterShort}>
                        <img src={`${imageUrl}${poster_path}`} alt={title}/>
                    </NavLink>

                    <div className={css.shortDescribe}>

                        <div className={favorite_status ? css.activeHeart : css.notActiveHeart}>
                            {
                                favorite_status ?
                                    <div onClick={() => dispatch(favoriteActions.remove_from_favorite(movie))}>
                                        <i className="fa-solid fa-heart-circle-minus"></i>
                                    </div> :
                                    <div onClick={() => dispatch(favoriteActions.add_to_favorite(movie))}>
                                        <i className={`fa-solid fa-heart-circle-plus`}></i>
                                    </div>
                            }
                        </div>

                        <div>
                            <h3>Year: {release_date}</h3>
                            <h3>Popularity: {popularity}</h3>
                            <div className={css.graph}>
                                <i className="fa-sharp fa-solid fa-chart-simple">
                                </i>
                                <h3> {vote_count} </h3>
                            </div>
                        </div>

                        <div>
                            <h3>Overview</h3>
                            <p>{overview}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export {Movie};