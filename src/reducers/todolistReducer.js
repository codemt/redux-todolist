import { ADD_TODO,EDIT_TODO, DELETE_TODO } from '../actions/types'
import update from 'immutability-helper'
const todolist = 
[
        { id :1, 
        todo:"hello team"
        }
]
function todolistReducer(state=todolist,{type,payload}){

        switch(type){

                case ADD_TODO:

                        let newTodo = { 
                                id: payload.todo.id, 
                                todo:payload.todo.todo
                        };
                         return state.concat([newTodo]);

                case EDIT_TODO:
                        console.log('edit todo called')
                        console.log(payload.todo.id)
                        return state.map(
                                    (todo, i) => i === 1 ? {...todo, todo: payload.todo.todo}
                                                            : todo
                                )
                             
                                // Now we know that foo is defined, we are good to go.
                case DELETE_TODO:
                        console.log('delete reducer called')
                 return  state.filter((item) => item.id != payload.id)
                        
                default:
                return state

        }



}
export default todolistReducer