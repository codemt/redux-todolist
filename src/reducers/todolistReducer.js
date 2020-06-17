import { TODO } from '../actions/types'
function todolistReducer(state=[],{type,payload}){

        switch(type){

                case TODO:
                return [
                    ...state,
                    payload.todo


                ]
                default:
                return state

        }



}
export default todolistReducer