import React from 'react';
import Navbar from './components/Navbar';

class App extends React.Component {
  state = {
    items: [],
    NewItem: {}
  }

  render() {

    return (
      <>
        <Navbar />
      </>
    );
  }
}

export default App;


