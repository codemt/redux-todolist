import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editTodo } from  '../../actions/editTodoActions'
class EditTodo extends Component {

state = {

    id:this.props.match.params.id,
    todo:''

}

    onInputChange = (e) => {

       const todo = e.target.value;
       this.setState({

        todo : todo

       })

    }
    editTodo = (e) => {
        
       
        e.preventDefault()
        const todo = {

            id : this.state.id++,
            todo: this.state.todo

        }
        this.props.createNewTodo(todo);
    }

    render() {
        const id = this.props.match.params.id
        console.log(this.props.todo)
        //console.log(this.props.todo[id])
        return (
            <div>
                <input className="todo" name="todo" onChange={this.onInputChange} value={this.state.todo} type="text" placeholder="enter todo" /> <br />
                <button onClick={this.createNewTodo}>Submit </button> 
            </div>
        )
    }
}
const MapStateToProps = (state,ownProps) =>({

    todo : state.todolist.filter((item) => item.id == ownProps.match.params.id)
    

})

const MapDispatchToProps = {

  editTodo : editTodo

}
export default connect(MapStateToProps,MapDispatchToProps)(EditTodo)
