import { EDIT_TODO } from './types'

export function editTodo(newTodo){

 
        return{

            type: EDIT_TODO,
            payload: {

                todo: newTodo

            }


        }



}