import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createTodo } from  '../../actions/todolistActions'
import Todos from '../Todos';
import { Link } from 'react-router-dom'
 class DisplayTodos extends Component {


    render() {
            console.log(this.props)
        return (
            <div>
                <ul>
                    {this.props.todos.map((todo) =>(
                    <div>
                        <li id={todo.id}>{todo.todo}</li><span><Link to={`/edittodo/${todo.id}`}> edit </Link></span>
                    </div>    
                    )) }   
                    {/** this.props.todos.map(todo => (
                        <Todos  {...todo} />
                     
                      )) */ }
                    {/**  this.props.todos.map((item) => { return <Todos {... item}/> }) */}        
                </ul>
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

export default connect (MapStateToProps,MapDispatchToProps)(DisplayTodos)