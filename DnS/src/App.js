import React from 'react';
import Navbar from './components/Navbar';
import User from './components/User';

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

    return (
      <>
        <Navbar />
        <User user={this.state.user} />
        
      </>
    );
  }
}

export default App;



