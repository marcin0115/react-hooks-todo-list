import React from 'react';
import AddTask from './components/AddTask';
import './App.css';

const App = ()=> {
  return (
    <div className='App'>
      <span className="AppTitle">Tasks List</span>

      <AddTask/>
    </div>
  );
}

export default App;
