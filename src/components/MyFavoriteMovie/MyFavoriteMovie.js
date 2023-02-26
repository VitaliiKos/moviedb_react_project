import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

import {StarsRating} from "../StarsRating/StarsRating";
import {favoriteActions} from "../../redux";
import {imageUrl} from "../../config";
import css from "./myFavoriteMovie.module.css";

const MyFavoriteMovie = ({myMovie}) => {
    const {themeStatus} = useSelector(state => state.genre);
    const dispatch = useDispatch();
    const {favoriteMovies, favoriteCount} = useSelector(state => state.favorite);
    const {
        id,
        popularity,
        poster_path,
        release_date,
        title,
        backdrop_path,
        overview,
        vote_average,
        vote_count,
    } = myMovie;
    const favorite_status = favoriteMovies ? id in favoriteMovies : false;

    useEffect(() => {

    }, [favoriteMovies, favoriteCount, favorite_status]);

    const sectionStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${imageUrl + backdrop_path})`
    };
    return (
        <>
            <div className={css.movie_wrap}>

                <div className={`${css.posterTitle} ${themeStatus ? css.posterTitleDark : css.posterTitleLight}`}>
                    <h3>{title}</h3>
                    <StarsRating rating={vote_average}/>
                </div>

                <div className={css.shortPosterBox}>

                    <NavLink to={`/movies/${myMovie.id}`} className={css.posterShort}>
                        <div className={css.play}>
                            <i className="fa-solid fa-circle-play"></i>
                        </div>

                        <img src={`${imageUrl}${poster_path}`} alt={title}/>
                    </NavLink>

                    <div className={css.shortDescribe} style={sectionStyle}>

                        <div className={css.moviePosterBgCover}>
                            <div className={favorite_status ? css.activeHeart : css.notActiveHeart}>
                                {
                                    favorite_status ?
                                        <div onClick={() => dispatch(favoriteActions.remove_from_favorite(myMovie))}>
                                            <i className="fa-solid fa-heart-circle-minus"></i>
                                        </div> :
                                        <div onClick={() => dispatch(favoriteActions.add_to_favorite(myMovie))}>
                                            <i className={`fa-solid fa-heart-circle-plus`}></i>
                                        </div>
                                }
                            </div>

                            <div>
                                <h3>Release date: {release_date}</h3>
                                <h3>Popularity: {popularity}</h3>
                                <div className={css.graph}>
                                    <i className="fa-sharp fa-solid fa-chart-simple">
                                    </i>
                                    <h3> {vote_count} </h3>
                                </div>
                            </div>

                            <div>
                                <p>{overview}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export {MyFavoriteMovie};