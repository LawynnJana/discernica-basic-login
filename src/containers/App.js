import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom'; 
import Login from '../components/login';
import AppLayout from '../components/appLayout';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" render={() => <Login/>}/>
        <Route path="/" render={() => <AppLayout/>}/>
      </Switch>
    );
  }
}

export default App;
