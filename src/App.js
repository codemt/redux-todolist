import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppHeader from './Components/AppHeader';
import DisplayTodos from './Components/DisplayTodos';
import AddTodo from './Components/AddTodo';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom'
import EditTodo from './Components/EditTodo';
class App extends Component {
  render(){
    return(
      <Router>
      <AppHeader />
          <Route exact strict path="/" component={AddTodo} />
       <Switch>
       <Route  exact strict path="/editTodo/:id" component={EditTodo} />
       </Switch>
      <DisplayTodos />
      </Router>

    )
        


  }

}

export default App;
