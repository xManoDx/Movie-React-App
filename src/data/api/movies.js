import { makeFetch } from "./utils"
import { makeMovieFetch} from "./utils"
import { makeMovieSearch } from "./utils"

export const discover = (page='1') =>  makeFetch('/discover/movie', page)
export const getMovie = (id) => makeMovieFetch('/movie/', id)
export const searchMovie = (request) => makeMovieSearch('/search/movie', request)