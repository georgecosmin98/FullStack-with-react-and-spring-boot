import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'


class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <HeaderComponent />
                    <Switch>
                        <Route path="/" exact component={LoginComponent} />
                        <Route path="/login" component={LoginComponent} />
                        <Route path="/welcome/:name" component={WelcomeComponent} />
                        <Route path="/todos" component={ListTodosComponent} />
                        <Route component={ErrorComponent} />
                    </Switch>
                    <FooterComponent />
                </Router>
                {/* <LoginComponent />
                <WelcomeComponent /> */}
            </div>
        )
    }
}


class HeaderComponent extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://google.com" className="navbar-brand">in28minutes</a></div>
                    <ul className="navbar-nav">
                        <li className="nav-link"><Link to="/welcome/in28minutes">Home</Link></li>
                        <li className="nav-link"><Link to="/todos">Todos</Link></li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li className="nav-link"><Link to="/login">Login</Link></li>
                        <li className="nav-link"><Link to="/logout">LogOut</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

class FooterComponent extends Component {
    render() {
        return (
            <div>
                <hr /> Footer
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
                    { id: 1, description: "Learn React", done: false, targetDate: new Date() },
                    { id: 2, description: "Become an expert at React", done: false, targetDate: new Date() },
                    { id: 3, description: "Hello world!", done: false, targetDate: new Date() },


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
                        <th>isCompleted?</th>
                        <th>targetDate</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.todos.map(
                        todo =>
                            <tr>
                                <td>{todo.id}</td>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate.toLocaleDateString()}</td>

                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    }
}


class WelcomeComponent extends Component {
    render() {
        return <div>Welcome {this.props.match.params.name}. You can manage your todos <Link to="/todos">here</Link>.</div>
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