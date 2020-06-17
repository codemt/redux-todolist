import { ADD_TODO, DELETE_TODO } from '../actions/types'

const todolist = [{ id :1, todo:"hello team"}]
function todolistReducer(state=todolist,{type,payload}){

        switch(type){

                case ADD_TODO:

                        let newTodo = { 
                                id: payload.todo.id, 
                                todo:payload.todo.todo
                        };
                         return state.concat([newTodo]);


                case DELETE_TODO:
                        console.log('delete reducer called')
                 return  state.filter((item) => item.id != payload.id)
                        
                default:
                return state

        }



}
export default todolistReducer