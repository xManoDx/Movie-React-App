import React, {Component} from 'react'

import pageWithLayout from '../../containers/page'
import {discover, searchMovie} from '../../data/api/movies'
import Discover from './Discover'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            page: 1,
        }
    }

    componentDidMount() {

       discover(this.state.page).then(movies => {
          this.setState({
              movies: movies.results
          })
       })
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.request !== '') {
        searchMovie(nextProps.request)
            .then(data => this.setState({
                movies: data.results,
            }))
        } else {
            discover(this.state.page).then(movies => {
                this.setState({
                    movies: movies.results,
                    page: 1
                })
            })
        }
    }

    render() {
        const { movies } = this.state;

        const moreDiscover = (page) => {
            discover(page+1).then(movies => {
                this.setState({
                    movies: this.state.movies.concat(movies.results),
                    page: this.state.page+1
                })
            })
        }

        const loadMore = () => {
            const {page} = this.state;
                moreDiscover(page)
        }

        return (
           <div className="movie-container">
               <Discover movies = {movies} />
               {movies && !this.props.request ? <span className="clickable" onClick={loadMore}>Load more...</span> : <div></div>}
           </div>
        )
    }
}

export default pageWithLayout(Home)