import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createTodo } from  '../../actions/todolistActions'
import  './index.css'
import { Link } from 'react-router-dom'
import { deleteTodo } from '../../actions/deleteTodoActions';
 class DisplayTodos extends Component {




    deleteTodo = (e) => {

        e.preventDefault()
        const id = e.target.id;
        this.props.deleteTodo(id)


    }
    render() {
            console.log(this.props)
        return (
            <div className="displayTodos">
                <table>

                    {this.props.todos.map((todo) =>(
                        <tr>
                        <td> {todo.todo} </td>
                        <td><Link className="link" to={`/edittodo/${todo.id}`}> edit </Link> </td>
                        <td> <button id={todo.id} onClick={this.deleteTodo}> delete </button></td>
                        </tr>
                      
                    )) }   
                    {/** this.props.todos.map(todo => (
                        <Todos  {...todo} />
                         <div class="todo">
                        <li id={todo.id}>{todo.todo}</li><span>
                        <Link className="link" to={`/edittodo/${todo.id}`}> edit </Link></span>
                        <button id={todo.id} onClick={this.deleteTodo}> delete </button>
                    </div> 
                     
                      )) */ }
                    {/**  this.props.todos.map((item) => { return <Todos {... item}/> }) */}        
                </table>
            </div>
        )
    }
}

const MapStateToProps = (state) =>({


    todos : state.todolist


})

const MapDispatchToProps = {

  createNewTodo : createTodo,
  deleteTodo : deleteTodo

}

export default connect (MapStateToProps,MapDispatchToProps)(DisplayTodos)