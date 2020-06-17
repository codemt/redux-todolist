import { createStore, combineReducers } from 'redux'
import todolistReducer from './reducers/todolistReducer'
const allReducers = combineReducers({

    todolist : todolistReducer

})
const store = createStore(
        allReducers,
        {
           todolist:[
               {
                id : 1,
                todo:"Submit Weekly Report",
                
                }
                ]
        },
        window.devToolsExtension && window.devToolsExtension()
)

console.log(store.getState())

export default store;