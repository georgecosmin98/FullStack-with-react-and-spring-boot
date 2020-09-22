import React, { Component } from 'react'
import TodoDataService from '../api/todo/TodoDataService'
import AuthentificationService from "../todo/AuthenticationService"
import moment from 'moment'
class ListTodosComponent extends Component {
    constructor(props) {
        console.log('constructor')
        super(props)
        this.state = {
            todos: [],
            message: null
        }

        this.deleteTodoClicked = this.deleteTodoClicked.bind(this);
        this.refreshTodos = this.refreshTodos.bind(this);
        this.updateTodoClicked = this.updateTodoClicked.bind(this);
    }

    componentWillUnmount() {
        console.log('componentDidUnmount')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate')
        console.log(nextProps)
        console.log(nextState)
        return true; //show todos
        //return false;// do not show todos!

    }

    componentDidMount() {
        console.log('componentDidMount')
        this.refreshTodos()
        console.log(this.state)
    }

    refreshTodos() {
        let username = AuthentificationService.getLoggedInUser();
        TodoDataService.retrieveAllTodos(username)
            .then(response => {
                this.setState({ todos: response.data })
            })
    }

    deleteTodoClicked(id) {
        let username = AuthentificationService.getLoggedInUser()
        //console.log(id + ' ' + username)
        TodoDataService.deleteTodo(username, id)
            .then(response => {
                this.setState({ message: `Delete of todo ${id} Succesful` });
                this.refreshTodos()
            })
    }

    updateTodoClicked(id) {
        // let username = AuthentificationService.getLoggedInUser()
        // //console.log(id + ' ' + username)
        // TodoDataService.deleteTodo(username, id)
        //     .then(response => {
        //         this.setState({ message: `Delete of todo ${id} Succesful` });
        //         this.refreshTodos()
        //     })

        // /todos/${id}
        this.props.history.push(`/todos/${id}`)

        console.log('update'+ id)
    }

    render() {
        console.log('render')
        return (
            <div>
                <h1>List Todos</h1>
                {this.state.message && <div class="alert alert-success"> {this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Target Date</th>
                                <th>Is Completed?</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo =>
                                        <tr key={todo.id}>
                                            <td>{todo.description}</td>
                                            <td>{todo.done.toString()}</td>
                                            <td>{moment(todo.targetDate.toString()).format('YYYY-MM-DD')}</td>
                                            <td><button className="btn btn-success" onClick={() => this.updateTodoClicked(todo.id)} >Update</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)} >Delete</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListTodosComponent