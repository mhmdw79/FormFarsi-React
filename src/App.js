import React from 'react';
import { Route,Redirect,Switch } from 'react-router';
import './App.css';
import SignUp from './components/SignUp';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
        <Switch>
      <Route path="/SignUp" component={SignUp}/>
      <Route path="/Login" component={Login}/>
      <Redirect from="/" to="/SignUp"/>
      </Switch>
    </div>
  );
}

export default App;
