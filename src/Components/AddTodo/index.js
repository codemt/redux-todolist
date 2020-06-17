import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createTodo } from  '../../actions/todolistActions'
 class AddTodo extends Component {

state = {

    id:2,
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
        const todo = {

            id : this.state.id++,
            todo: this.state.todo

        }
        this.props.createNewTodo(todo);
    }

    render() {
        return (
            <div>
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
