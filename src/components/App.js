import React, { useState } from 'react';
import Search from './Search';
import Tableau from './Tableau';

function App(){
    const [filterText, setFilterText] = useState()
  
    return (
      <div className="App">
        <Search 
          filterText={filterText}
          onSearchChange={setFilterText}
        />
        <Tableau 
          filterText={filterText}
        />
      </div>
    );
  }

export default App;
