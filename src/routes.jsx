import React from 'react'
import {
    Route
} from 'react-router-dom'

import {pageWithoutLayout} from "./containers/page";

import Home from './views/home/Home'
import About from './views/About/About'
import Search from './views/Search/Search'
import MovieDetails from './views/home/MovieDetails'
const Routes = props => (

    <div>
        <Route
            path='/' exact
            render={(renderProps) => (
                <Home
                    {...props}
                    {...renderProps}
                    request = {''}
                />
            )}
        />
        <Route
            path='/about'
            render={(renderProps) => (
                <About
                    {...props}
                    {...renderProps} />
            )}
        />
        <Route
            path='/movie/:id'
            //path={`${match.path}`}
            render={(renderProps) => (
                <MovieDetails
                    {...props}
                    {...renderProps}
                />
            )}
        />

    </div>

)

export default pageWithoutLayout(Routes)
