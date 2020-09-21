import React, { Component } from 'react'
import moment from 'moment'
import { Field, Form, Formik } from 'formik'
class TodoComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 1,
            description: 'Learn Forms Now',
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }

        this.onSubmit=this.onSubmit.bind(this)
    }

    onSubmit(values){
        console.log(values)
    }

    render() {
        let {description,targetDate} = this.state   // let description = this.state.description && let targetDate = this.state.targetDate => JS Destructuring
        return (
            <div>
                <h1>Todo</h1>
                <div className="container">
                    <Formik
                        initialValues={{description,targetDate}}
                        onSubmit={this.onSubmit}
                    >
                        {
                            (props) => (
                                <Form>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description"></Field>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Target Date</label>
                                        <Field className="form-control" type="date" name="targetDate"></Field>
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>)
    }
}

export default TodoComponent