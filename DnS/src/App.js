import React from 'react';
import Navbar from './components/Navbar';
import MyItem from './components/MyItem'
import Categories from './components/Categories'

// import ShortDetails from './components/ShortDetails'

// import Login from './components/Login'
import Singup from './components/Signup';
import Login from './components/Login'
import Additem from './components/AddItem';
import SearchItem from './components/SearchItem';
import ItemMapSlice from './components/ItemMapSlice'
import { BrowserRouter as Router, Swich, Route } from 'react-router-dom'
import User from './components/User';

// import DetailsModule from './components/DetailsModule';
// import SearchItem from './components/SearchItem'
// import ShortDetails from './components/ShortDetails';;

// import axios from 'axios';
// import ShortDetails from './components/ShortDetails'

class App extends React.Component {
  state = {
    items: [],
    user: {
      _id: "5d6d297e67298e183fc7ae2c",
      items: [
        {
          itemName: 'Donats ',
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
  searchItem = (resultSearch) => {
    this.setState({items: resultSearch})
    console.log(this.state.items)
  }
  render() {
    return (
      <>
       <Router>
         <Navbar />

      <Route  path="/users"  component={props =>(<User {...props} user={this.state.user}/>)}/>
      <Route path="/users/addItem" component={props =>(<Additem {...props} user={this.state.user}/>)}/>
      <Route path="/users/MyItem" component={props =>(<MyItem {...props} user={this.state.user}/>)}/> 
      <Route path='/login' component={Login} />
      <Route path='/signup' component={Singup}/>
      {/* <SearchItem/> */}
          {/* <ItemMapSlice users = {this.state.user.items}/> */}

      </Router>
      <Categories appState={this.searchItem}/>
        {/* <ShortDetails/>
        <SearchItem/>
      <DetailsModule/> */}

      </>
    );

  }
}

export default App;
