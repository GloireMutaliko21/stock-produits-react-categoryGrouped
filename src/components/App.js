import React, { Component } from 'react';
import Search from './Search';
import Tableau from './Tableau';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search />
        <Tableau />
      </div>
    );
  }
}

export default App;
