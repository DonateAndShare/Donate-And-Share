import React from 'react';
import Navbar from './components/Navbar';

class App extends React.Component {
  state = {
    items: [],
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


