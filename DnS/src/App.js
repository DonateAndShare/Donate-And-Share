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
          <Navbar />
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={Singup}/>
        </Router>

      </>
    );
  }
}

export default App;


