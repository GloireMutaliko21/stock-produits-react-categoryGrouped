import React, { Component, useState } from 'react';
import Search from './Search';
import Tableau from './Tableau';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filterText: ''
    };
    this.handleFilterTextChange =
      this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  render() {
    return (
      <div className="App">
        <Search
          filterText={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange}
        />
        <Tableau 
          filterText={this.state.filterText}
        />
      </div>
    );
  }
}

export default App;
