import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'


class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <Route path="/" exact component={LoginComponent} />
                    <Route path="/login" component={LoginComponent} />
                    <Route path="/welcome" component={WelcomeComponent} />
                </Router>
                {/* <LoginComponent />
                <WelcomeComponent /> */}
            </div>
        )
    }
}

class WelcomeComponent extends Component {
    render() {
        return <div>Welcome in28minutes</div>
    }
}


class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: 'in28minutes',
            password: 'aa',
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }

    handleChange(event) {
        console.log(event.target.name);
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    loginClicked(event) {
        //in28minutes,dummy
        if (this.state.username === "in28minutes" && this.state.password === "dummy") {
            this.props.history.push("/welcome")
            this.setState({ showSuccessMessage: true })
            this.setState({ hasLoginFailed: false })
        }
        else {
            this.setState({ showSuccessMessage: false })
            this.setState({ hasLoginFailed: true })
        }

        console.log(this.state)
    }

    render() {
        return (
            <div>
                {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} />*/}
                {this.state.hasLoginFailed && <div>Invalid Credentials</div>} {/*If condition is true => show message(div)*/}
                {/*<ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage} />*/}
                {this.state.showSuccessMessage && <div>Login Succesfully</div>}
                User name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <button onClick={this.loginClicked}>Login</button>
            </div>
        )
    }
}

// function ShowInvalidCredentials(props) {
//     if (props.hasLoginFailed) {
//         return <div>Invalid Credentials</div>
//     }
//     return null
// }

// function ShowLoginSuccessMessage(props) {
//     if (props.showSuccessMessage) {
//         return <div>Login succesfully</div>
//     }
//     return null
// }
export default TodoApp