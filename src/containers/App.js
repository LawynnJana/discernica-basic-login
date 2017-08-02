import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom'; 
import Login from './login';
import Home from '../components/home';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" render={() => <Login/>}/>
        <Route path="/" render={() => <Home/>}/>
      </Switch>
    );
  }
}

export default App;
