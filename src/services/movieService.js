import {apiService} from "./apiService";
import {mainUrl} from "../config";

const movieService = {
    getAll: ({page = 1, with_genres = 'all', query, year, sort_by}) => apiService.get(mainUrl.movies.movies, {
        params: {
            page,
            with_genres,
            query,
            year,
            sort_by
        }
    }),
    getWithSearch: ({primary_release_year, query, page, with_genres}) => apiService.get(mainUrl.forSearch.queryParams, {
        params: {
            page,
            with_genres,
            primary_release_year,
            query
        }
    }),
    getById: ({id, trailer}) => apiService.get(mainUrl.movies.byId(id), {params: trailer})
}

export {movieService};