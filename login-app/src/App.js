import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ValidUser from './components/ValidUser';


function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
       <Route exact path="/" render={LoginForm} />
       <Route exact path="/validuser" component={ValidUser} />
       </Switch>
    </div>
    </Router>
  );
}

export default App;
