import React, {PureComponent} from 'react'

import pageWithLayout from '../../containers/page'
import Discover from '../home/Discover'
import {searchMovie} from "../../data/api/movies";

class Search extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
        }
    }

    componentWillMount() {
        console.log(`search result is ${this.props.request}`);

        searchMovie(this.props.request)
            .then(data => this.setState({
                movies: data.results,
            }))
    }

    componentWillReceiveProps(nextProps) {
        searchMovie(nextProps.request)
            .then(data => this.setState({
                movies: data.results,
            }))
    }

    render() {
        const { movies } = this.state;
        if (!movies && this.props.request) return (
            <div className="loading">Searching...</div>
        )
        return (
            <div className="movie-container">
                <Discover movies = {movies} />
            </div>
        )
    }
}

export default pageWithLayout(Search)