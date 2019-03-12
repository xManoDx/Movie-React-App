const BASE_URL = 'https://api.themoviedb.org/3'
export const defaultFetchOptions = {}

const API_KEY = "c47e2793be37196a5fb1c8d1515bcffe"

const completePageUrl = (path, opt) => {
    let url = `${BASE_URL}${path}?api_key=${API_KEY}&page=${opt}`
    return url
}

const completeIdUrl = (path, id) => {
    let url = `${BASE_URL}${path}${id}?api_key=${API_KEY}`
    return url
}

const completeSearchUrl = (path, request) => {
    let url = `${BASE_URL}${path}?api_key=${API_KEY}&query=${request}`
    return url
}

export const makeFetch = (path, page = '1') => {
    const url = completePageUrl(path, page)
    return fetch(url)
        .then(resp => {
            if (resp.ok) return resp.json()
            const err = resp.statusText
            throw new Error(err)

        })
}

export const makeMovieFetch = (path, id) => {
    const url = completeIdUrl(path, id)
    return fetch(url)
        .then(resp => {
            if (resp.ok) return resp.json()
            const err = resp.statusText
            throw new Error(err)

        })
}

export const makeMovieSearch = (path, request) => {
    const url = completeSearchUrl(path, request)
    return fetch(url)
        .then(resp => {
            if (resp.ok) return resp.json()
            const err = resp.statusText
            throw new Error(err)

        })
}