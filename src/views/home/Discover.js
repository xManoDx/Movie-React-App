import React, {Component} from 'react'
import Poster from '../../components/Poster/Poster'

class Discover extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="movie-container">
                {this.props.movies.map((movie, index) => <Poster info={movie} key={index} />)}
            </div>
        )
    }
}

export default Discover
