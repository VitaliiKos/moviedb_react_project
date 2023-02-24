import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {routersPoint} from "../../routes";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import {styled} from "@mui/material/styles";
import Badge from '@mui/material/Badge';

import {SwitchTheme} from "../SwitchTheme/SwitchTheme";
import {MovieSearch} from "../MovieSearch/MovieSearch";
import css from './header.module.css';
import {UserInfo} from "../UserInfo/UserInfo";
import {favoriteActions} from "../../redux";

const Header = () => {

    const dispatch = useDispatch();
    const {favoriteCount} = useSelector(state => state.favorite);
    const my_favorite_movie = JSON.parse(localStorage.getItem('myMovies'));

    useEffect(() => {
        const count = my_favorite_movie ? Object.keys(my_favorite_movie).length : 0
        dispatch(favoriteActions.update_favorite({movie: my_favorite_movie, count}))
    }, [dispatch, favoriteCount])

    const StyledBadge = styled(Badge)(({theme}) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));

    return (
        <div className={css.menu}>
            <NavLink to={''}>HOME</NavLink>
            <NavLink to={routersPoint.movies}>MOVIES</NavLink>
            <div className={css.searchInput}>
                <MovieSearch/>
            </div>
            <NavLink to={'favorites'}>
                <IconButton aria-label="favorite">
                    <StyledBadge badgeContent={favoriteCount} color="secondary">
                        <FavoriteIcon sx={{color: '#cc3030', fontSize: 32}}/>
                    </StyledBadge>
                </IconButton>
            </NavLink>
            <SwitchTheme/>
            <UserInfo/>
        </div>
    );
};

export {Header};