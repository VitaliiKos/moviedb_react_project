import React, {createRef} from 'react';
import {useSearchParams} from "react-router-dom";

const MovieSearch = () => {
    const [,setSearchParams] = useSearchParams();
    const searchStr = createRef();

    const chooseSearchParams = (e) => {
        e.preventDefault()
        setSearchParams({query:searchStr.current.value, page:'1'})
        e.target.reset()
    }
    return (
        <div>
            <form onSubmit={chooseSearchParams}>
                <input type="text" name={'searchStr'} ref={searchStr} defaultValue={''}/>
                <button>Search</button>
            </form>
        </div>
    );
};

export {MovieSearch};