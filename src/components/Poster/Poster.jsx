import React from 'react'
import {Link} from 'react-router-dom'

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/'
const Poster = (props) => (

    <div className="poster">
        <Link to={`movie/${props.info.id}`}>
            <img src={`${IMAGE_BASE_URL}${props.info.poster_path}`} /> <br/>
            {props.info.title}
        </Link>
    </div>
)

export default Poster
