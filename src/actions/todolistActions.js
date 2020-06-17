import { TODO } from './types'

export  function createTodo(newTodo){

 
        return{

            type: TODO,
            payload: {

                todo: newTodo

            }


        }



}