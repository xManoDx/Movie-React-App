import React from 'react'
import {
    BrowserRouter as Router
} from "react-router-dom";

const withRouter = Wrapped => props => (
    <Router>
        <Wrapped {...props} />
    </Router>
)

export default withRouter