import React from 'react';
import './App.css';
import Table from './tableassg/Table'; 

function App() {
  return (
    <div className="App">
      <div className="table-container"> {/* Addeded container div for horizontal scrolling */}
        <Table />
      </div>
    </div>
  );
}

export default App;
