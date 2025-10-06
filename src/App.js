import React from 'react';
import './App.css';
import { Hello } from './component/Hello';
import { Welcome } from './component/Welcome'; 
import { Navbar } from './component/Navbar';

function App() {
  return (
    <div className="App">
     
      {/* <Hello />
      <Welcome /> */}

      <Navbar />
      
    </div>
  );
}

export default App;
