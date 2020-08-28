import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import HelloWorldService from '../api/todo/HelloWorldService'
class WelcomeComponent extends Component {

    constructor(props) {
        super(props)
        this.retrieveWelcomeMEssage = this.retrieveWelcomeMEssage.bind(this)
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
        this.state = {
            welcomeMessage: ''
        }
    }

    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome {this.props.match.params.name}. You can manage your todos <Link to="/todos">here</Link>.
                </div>
                <div className="container">
                    Click here to get a customized welcome message.
                    <button onClick={this.retrieveWelcomeMEssage} className="btn btn-success">Get Welcome Messagee</button>
                </div>
                <div className="container">
                    {this.state.welcomeMessage}
                </div>
            </>
        )
    }

    retrieveWelcomeMEssage() {
        HelloWorldService.executeHelloWorldService()
            .then(response => this.handleSuccessfulResponse(response));
    }

    handleSuccessfulResponse(response) {
        this.setState({
            welcomeMessage: response.data
        })
    }
}

export default WelcomeComponent