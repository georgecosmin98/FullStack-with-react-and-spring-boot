import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <Switch>
                        <Route path="/" exact component={LoginComponent} />
                        <Route path="/login" component={LoginComponent} />
                        <Route path="/welcome/:name" component={WelcomeComponent} />
                        <Route path="/todos" component={ListTodosComponent} />
                        <Route component={ErrorComponent} />
                    </Switch>
                </Router>
                {/* <LoginComponent />
                <WelcomeComponent /> */}
            </div>
        )
    }
}


class ListTodosComponent extends Component {

    constructor(props) {
        super();
        this.state = {
            todos:
                [
                    { id: 1, description: "Learn React" },
                    { id: 2, description: "Become an expert at React" },
                    { id: 3, description: "Hello world!" },


                ]
        }
    }
    render() {
        return <div>
            <h1>List Todos</h1>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>description</th>
                    </tr>
                </thead>
                <tbody>
                    {   this.state.todos.map(
                        todo => 
                        <tr>
                            <td>{todo.id}</td>
                            <td>{todo.description}</td>

                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    }
}


class WelcomeComponent extends Component {
    render() {
        return <div>Welcome {this.props.match.params.name}</div>
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
            this.props.history.push(`/welcome/${this.state.username}`)
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

function ErrorComponent() {
    return <div>An error occurred. I don't know what to do! Contact support at abcde-fghijk</div>
}
export default TodoApp