import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      
      {/** <Header/> */}
      
      <Main/>
    </div>
  );
}

export default App;
