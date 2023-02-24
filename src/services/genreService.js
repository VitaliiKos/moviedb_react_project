import {apiService} from "./apiService";
import {mainUrl} from "../config";

const genreService = {
    getAll: () => apiService.get(mainUrl.genre.genre)
}

export {genreService}