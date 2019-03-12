import React, { Component } from 'react'
import { getMovie } from '../../data/api/movies'
import pageWithLayout from "../../containers/page";
import {Link} from "react-router-dom";

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/'

class MovieDetails extends Component {
    state = {movie: null}

    componentDidMount() {
        const { match } = this.props
        const { id } = match.params

        getMovie(id)
            .then(movie => this.setState({movie}))
    }

    render() {
        const { movie } = this.state
        if (!movie) return (
            <div className="loading">Loading...</div>
        )
        return (
            <div className='movie-details'>
                <Link to="/">Back to Movie-list</Link> <br />
                <div className="movie-details-container">
                    <div className="movie-details-paddings">
                        <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} />
                    </div>
                    <div className="movie-details-paddings movie-details-info">
                    <h4>{movie.title} </h4>
                        <b>Genres:</b> {movie.genres.map(genre => genre.name).join(', ')}
                        <b>Overview:</b> {movie.overview}
                        <b>Release Date:</b> {movie.release_date}
                        <b>Rating:</b> {movie.vote_average}
                    </div>
                </div>
            </div>
        )
    }
}

export default pageWithLayout(MovieDetails)