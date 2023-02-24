import axios from "axios";
import {baseURL} from "../config";

const userTokenKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGVkZTQ4NTY5NTYyYTRjNjE0YjZkMDIzNWE3OWRmNyIsInN1YiI6IjYyMDAxNjVjZTI3MjYwMDEwNGZmNzc1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EG2lPzOunOqrglrrqdM-Rf3fip_c4GSFXoBdeqAjATs';

const apiService = axios.create({baseURL});

apiService.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${userTokenKey}`
    return config
})

export {apiService};