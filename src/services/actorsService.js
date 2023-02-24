import {apiService} from "./apiService";
import {mainUrl} from "../config";

const actorsService = {
    getAll: (id) => apiService.get(mainUrl.actors.actors(id))
}
export {actorsService};