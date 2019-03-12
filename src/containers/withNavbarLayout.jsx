import React, { Component } from 'react'
import NavbarComponent from '../components/Navbar/Navbar'

function withNavbarLayout(Wrapped) {
    return class WrappedClass extends Component {
        constructor(props) {
            super(props);
            this.onSubmit = this.onSubmit.bind(this);

            this.state = {
            filteredMovie: null,
            request: ''
            };
        }

        onSubmit = async (search) => {
            console.log(`in onSubmit search is ${search}`)
            await this.setState({
                request: search
            })
            console.log(`in onSubmit request after setState is ${this.state.request}`)
        }
        componentDidUpdate() {

        }

        render() {
            return (
                <div>
                    <NavbarComponent search={this.onSubmit}/>

                    <Wrapped {...this.props} request={this.state.request} />
                </div>
            )
        }
    }
}

/*
 const withNavbarLayout = Wrapped => props => {

    return (

        <div>
            <NavbarComponent />
            <Wrapped {...props} />
        </div>
    )
}
*/
export default withNavbarLayout