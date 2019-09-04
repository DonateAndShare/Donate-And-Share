import React from 'react';
import Navbar from './components/Navbar';

import Additem from './components/AddItem'
import MyItem from './components/MyItem'

import Singup from './components/Signup';
// import Login from './components/Login'
import {BrowserRouter as Router, Swich, Route } from 'react-router-dom'

import User from './components/User';

// import DetailsModule from './components/DetailsModule';
// import SearchItem from './components/SearchItem'
// import ShortDetails from './components/ShortDetails';;

// import axios from 'axios';


class App extends React.Component {
  state = {

    user:{},
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
    // const routing = (
    //   <Router>
    //     <div>
    //       {/* <Route path="/" component={App} /> */}
      

    //       {/* <Route path="/contact" component={Additem} /> */}
    //     </div>
    //   </Router>
    // )component={User} />
    
    return (
      <>



        <Router>
          <Navbar />
      <Route  path="/users"  component={props =>(<User {...props} user={this.state.user}/>)}/>
      <Route path="/users/addItem" component={props =>(<Additem {...props} user={this.state.user}/>)}/>
      <Route path="/users/MyItem" component={props =>(<MyItem {...props} user={this.state.user}/>)}/>
          {/* <Route path='/login' component={Login}/> */}
          <Route path='/signup' component={Singup}/>
          <Route path='/MyItem' component={MyItem}/>
          

          {/* <User user={this.state.user} /> */}
        </Router>
        

        {/* <ShortDetails/>
        <SearchItem/>
      <DetailsModule/> */}

      </>
    );
  }
}

export default App;

