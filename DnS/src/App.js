import React from 'react';
import Navbar from './components/Navbar';
import ShortDetails from './components/ShortDetails'
class App extends React.Component {
  state = {
    user:{},
    items: [],
  }

  render() {

    return (
      <>
       
        <Navbar />
        <ShortDetails/>
      </>
    );
  }
}

export default App;
