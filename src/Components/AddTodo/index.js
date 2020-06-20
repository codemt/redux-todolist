import React, { Component } from 'react'
import { connect } from 'react-redux'
import './index.css'
import { createTodo } from  '../../actions/todolistActions'
import nextId from "react-id-generator";
 
 class AddTodo extends Component {

state = {

    todo:''

}

    onInputChange = (e) => {

       const todo = e.target.value;
       this.setState({

        todo : todo

       })

    }
    createNewTodo = (e) => {
        
        e.preventDefault()
        const id = nextId();
        const todo = {

            id : id,
            todo: this.state.todo

        }
        this.props.createNewTodo(todo);
    }

    render() {
        return (
            <div className="addTodo">
                <input className="todo" name="todo" onChange={this.onInputChange} value={this.state.todo} type="text" placeholder="enter todo" /> <br />
                <button onClick={this.createNewTodo}>Submit </button> 
            </div>
        )
    }
}
const MapStateToProps = (state) =>({


    todos : state.todolist


})

const MapDispatchToProps = {

  createNewTodo : createTodo

}
export default connect(MapStateToProps,MapDispatchToProps)(AddTodo)
