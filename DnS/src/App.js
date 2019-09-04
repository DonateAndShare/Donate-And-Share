import React from 'react';
import Navbar from './components/Navbar';
import Singup from './components/Signup';
import Login from './components/Login'

import {BrowserRouter as Router, Swich, Route } from 'react-router-dom'

class App extends React.Component {
  state = {
    items: [],
  }

  render() {

    return (
      <>
        <Router>
          <Route exact path='/nav' component={Navbar}/>
          <Route path='/nav/login' component={Login}/>
          <Route path='/nav/signup' component={Singup}/>
        </Router>

      </>
    );
  }
}

export default App;


