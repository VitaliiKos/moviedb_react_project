import React, {createRef} from 'react';
import {useNavigate, useSearchParams} from "react-router-dom";
import {useSelector} from "react-redux";

import css from './movieSerarch.module.css';

const MovieSearch = () => {

    const {themeStatus} = useSelector(state => state.genre);
    const [, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const searchStr = createRef();

    const chooseSearchParams = (e) => {
        e.preventDefault()
        setSearchParams({query: searchStr.current.value, page: '1'})
        e.target.reset()
    }
    return (
        <div className={`${css.box} ${themeStatus ? css.boxBgDark : css.boxBgLight}`}>
            <form onSubmit={chooseSearchParams}>
                <input type="text" name={'searchStr'} placeholder={'Search Film'} ref={searchStr} defaultValue={''}/>
                <button onClick={() => navigate('/movies')}><i className="fa-sharp fa-solid fa-magnifying-glass"></i>
                </button>
            </form>
        </div>
    );
};

export {MovieSearch};