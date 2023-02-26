import React from 'react';
import CreatableSelect from 'react-select/creatable';
import {useSearchParams} from "react-router-dom";
import Select from "react-select";
import {useSelector} from "react-redux";

import {sort_by_key, year_key} from "../../constants";
import css from './filterForm.module.css';

const FilterForm = () => {
    const {themeStatus} = useSelector(state => state.genre);
    const [searchParams, setSearchParams] = useSearchParams();

    const yearOptions = [
        {value: '2023', label: '2023', isFixed: true},
        {value: '2022', label: '2022'},
        {value: '2021', label: '2021'},
        {value: '2020', label: '2020'},
        {value: '2019', label: '2019'},
        {value: '2018', label: '2018'},
        {value: '2017', label: '2017'},
        {value: '2016', label: '2016'},
        {value: '2015', label: '2015'},
        {value: '2014', label: '2014'},
    ];
    const sortOptions = [
        {value: 'popularity.asc', label: 'popularity.asc', isFixed: true},
        {value: 'popularity.desc', label: 'popularity.desc'},
        {value: 'release_date.asc', label: 'release_date.asc'},
        {value: 'release_date.desc', label: 'release_date.desc'},
        {value: 'revenue.asc', label: 'revenue.asc'},
        {value: 'revenue.desc', label: 'revenue.desc'},
        {value: 'primary_release_date.asc', label: 'primary_release_date.asc'},
        {value: 'primary_release_date.desc', label: 'primary_release_date.desc'},
        {value: 'original_title.asc', label: 'original_title.asc'},
        {value: 'original_title.desc', label: 'original_title.desc'},
        {value: 'vote_average.asc', label: 'vote_average.asc'},
        {value: 'vote_average.desc', label: 'vote_average.desc'},
        {value: 'vote_count.asc', label: 'vote_count.asc'},
        {value: 'vote_count.desc', label: 'vote_count.desc'},

    ]

    const params_for_search = Object.fromEntries([...searchParams]);

    const sort_by = (e) => {
        params_for_search[sort_by_key] = e.value;
        setSearchParams(params_for_search);
    }

    const selectYear = (e) => {
        params_for_search[year_key] = e.value;
        setSearchParams(params_for_search);
    }

    return (
        <div className={`${css.searchFormBlock} ${themeStatus ? css.searchFormDark : css.searchFormLight}`}>
            <CreatableSelect isClearable options={yearOptions} onChange={selectYear} placeholder={'Year'}/>
            <Select onChange={sort_by} placeholder={'SortBy'} options={sortOptions}/>
        </div>
    );
};

export {FilterForm};