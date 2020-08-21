import React, { Component } from 'react'

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
               <LoginComponent/>
               </div>
        )
    }
}


class LoginComponent extends Component {
    render() {
        return (
            <div>
                User name: <input type="text" name="username" />
                Password: <input type="password" name="password" />
                <button>Login</button>
            </div>
        )
    }
}

export default TodoApp