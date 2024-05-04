import React from 'react';
import './table.css';
function Table() {
  const CustomTable = () => {
    const data = [
      { name: 'Bunmi Adedeji', age: 35, state: 'Oyo' },
      { name: 'Dele Ogun', age: 29, state: 'Lagos' },
      { name: 'Bayo Daniel', age: 22, state: 'Ondo'},
      { name: 'John Okafor', age: 31, state: 'Cross river' },
      { name: 'Bode Thomas', age: 19, state: 'Lagos' },
      { name: 'Apkan Morinwo', age: 20, state: 'Edo'},
    ];

    const handleClick = (row) => {
      console.log('Clicked Row Data:', row);
    };

    return (
      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} onClick={() => handleClick(row)}>
                <td>{row.name}</td>
                <td>{row.age}</td>
                <td>{row.state}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="App">
      <h2>React Table</h2>
      <CustomTable />
    </div>
  );
}

export default Table;