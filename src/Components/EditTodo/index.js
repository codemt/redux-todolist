import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editTodo } from  '../../actions/editTodoActions'
import { withRouter } from 'react-router-dom'
class EditTodo extends Component {

    constructor(props){

        super(props)
        this.state = {

            id:this.props.match.params.id,
            todo:this.props.todo[0].todo
        
        }

    }
    
    onInputChange = (e) => {

       const todo = e.target.value;
       this.setState({

        todo : todo

       })

    }
    editTodo = (e) => {
        
      const id =   e.target.id 
      console.log('id from editTodo' +id)
        const todo = {

            id : this.state.id,
            todo: this.state.todo

        }
        this.props.editTodo(todo);
        this.props.history.push('/');
    }
   
    render() {
        const id = this.props.match.params.id
        console.log(id)
        console.log(this.props.todo)
        console.log(this.props.todo[0].todo)
        const todo = this.state;
       
        return (
            <div>
                <input className="todo" name="todo" onChange={this.onInputChange} value={todo.todo} type="text" placeholder="enter todo" /> <br />
                <button id={todo.id} onClick={this.editTodo}>Submit </button> 
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
export default withRouter(connect(MapStateToProps,MapDispatchToProps)(EditTodo))
