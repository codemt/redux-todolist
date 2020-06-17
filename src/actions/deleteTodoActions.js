import {  DELETE_TODO } from './types'

export function deleteTodo(id){

    
        return{

            type: DELETE_TODO,
            payload: {

                    id : id
            }

        }



}