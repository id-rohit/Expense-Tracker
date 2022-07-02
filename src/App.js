import React from 'react';
import './App.css';
import { Header} from './components/Header.js'
import {Balnace} from './components/Balance.js'
import {Income} from './components/Income.js'
import {Add} from './components/Add.js'
import {Global} from './context/Global.js'
import { List } from './components/List';

function App() {
  return (
    <Global className='main'>
      <div className='first'>
      <Header />
      <div className='container'>
        <Balnace />
      </div>
      <Income />
      <Add />
      </div>
      <div className='second'>
      <List />
      </div>
    </Global>
    
  );
}

export default App;
