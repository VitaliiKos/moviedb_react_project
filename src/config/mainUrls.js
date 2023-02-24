const baseURL = 'https://api.themoviedb.org/3';

const imageUrl = 'https://image.tmdb.org/t/p/original/';


const mainUrl = {
    movies: {
        movies: '/discover/movie',
        byId: (id) => `movie/${id}`
    },
    genre: {
        genre: '/genre/movie/list'
    },
    forSearch: {
        queryParams: '/search/movie'
    },
    actors: {
        actors: (id) => `movie/${id}/credits`
    },
}

export {
    baseURL,
    mainUrl,
    imageUrl
}