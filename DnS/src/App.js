import React from 'react';
import Navbar from './components/Navbar';

import Singup from './components/Signup';
import Login from './components/Login'

import {BrowserRouter as Router, Swich, Route } from 'react-router-dom'
import User from './components/User';
// import DetailsModule from './components/DetailsModule';
// import SearchItem from './components/SearchItem'
// import ShortDetails from './components/ShortDetails';;
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

// import axios from 'axios';


class App extends React.Component {
  state = {
    items: [],
    user:{
      _id: "5d6d297e67298e183fc7ae2c",
      items: [
        {
          itemName: 'danadsf fdfdgf ',
          itemDescription: 'new book',
          category: 'books',
          type: 'donets',
          phone: 799333626,
          location: 'amman',
          locationDescription: 'jam3a',
          isAvalible: true,
          image: ''
        }
      ],
      firstName: 'haya',
      lasttName: 'fraij',
      username: 'haya96',
      phone: 962799333626,
      email: 'hayafraij@gmail.com',
      birthday: '2019-09-01T17:06:32.227Z',
      password: 'Ab123456',
      dateOfSignUp: '2019-09-01T17:06:32.227Z',
      isLogin: false,
      __v: 0
    }
  }
 
  
  render() {
    const routing = (
      <Router>
        <div>
          <Route path="/" component={App} />
          <Route path="/users" component={User} />
          {/* <Route path="/contact" component={Additem} /> */}
        </div>
      </Router>
    )

    return (
      <>

        <Router>
          <Navbar />
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={Singup}/>
        </Router>
        <User user={this.state.user} />
        {/* <ShortDetails/>
        <SearchItem/>
        <DetailsModule/> */}

        
      </>
    );
  }
}

export default App;



