import React, {Component} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import FormControl from 'react-bootstrap/FormControl'
import {NavLink, Link} from 'react-router-dom'

class NavbarComponent extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            search: ''
        }
    }

    handleChange(event) {
        event.preventDefault()
        this.setState({
            search: event.target.value
        })
        console.log(`input is ${this.state.search}`)
    }

    render() {
        return(
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto nav-links">
                        <NavLink
                            to="/"
                            activeClassName="active"
                        >Home</NavLink>
                        <NavLink
                            to="/about"
                            activeClassName="active"
                        >About</NavLink>
                    </Nav>
                    <div className="col-sm-8"></div>
                    <FormControl value={this.state.search} type="text" placeholder="Search" className="mr-sm-2" onChange={this.handleChange}/>
                    <Nav className="mr-auto nav-links">
                        <span className="clickable" onClick={() => this.props.search(this.state.search)}>Search</span>

                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        )
    }
}


export default NavbarComponent