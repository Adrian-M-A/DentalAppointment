import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './containers/Landing/Landing.jsx'
import Login from './containers/Login/Login.jsx';
import Register from './containers/Register/Register.jsx';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Landing} exact />
        <Route path='/login' component={Login} exact />
        <Route path='/register' component={Register} exact />
      </Switch>
    </Router>
  );
}

export default App;
