import { ADD_TODO } from './types'

export  function createTodo(newTodo){

 
        return{

            type: ADD_TODO,
            payload: {

                todo: newTodo

            }


        }



}