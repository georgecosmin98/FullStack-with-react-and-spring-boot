import React, { Component } from 'react'

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <LoginComponent />
            </div>
        )
    }
}


class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: 'in28minutes',
            password: 'aa'
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log(event.target.name);
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    render() {
        return (
            <div>
                User name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <button>Login</button>
            </div>
        )
    }
}

export default TodoApp