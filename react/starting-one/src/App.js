import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
// ! === = My Starts = ===

import { Hello } from './components/Hello'
import WelcomeClass from './components/ClassComponent'
import JsxConst from './components/JsxFile';
import PropertiesG from './props/FuncProps';
import LearnClassProps from './props/ClassProps';
import ChangeMessage from './state/Message';
import Counter from './state/counter';

function App() {
  return (
    <div className="App" >
      {/* <Hello />
      <WelcomeClass /> */}
      {/* <JsxConst /> */}

      {/*-------- - Using the Properties froom here - --------  */}
      {/* <PropertiesG name='Nilesh' work='Developer'>
          <p>Hello Child</p>
          <button>Click</button><br/><br/>
          <input type='text' />
      </PropertiesG>
      <PropertiesG name='Satender' work='Docter'>
          <p>Hello Child</p>
          <button>Click</button>
      </PropertiesG>
      <PropertiesG name='Kapil' work='Distributor'>
          <p>Hello Child</p>
          <button>Click</button>
      </PropertiesG> */}
      
      {/* ! --------- - For ClassesProps - ---------- */}
      {/* <LearnClassProps name='Satender' working='Docter'>
        <p>Learning Radiography</p>
      </LearnClassProps>
      <LearnClassProps name='Kapil' working='Distributor'>
        <p>Learning Customers</p>
      </LearnClassProps>
      <LearnClassProps name='Satender' working='Developer'>
        <p>Learning Programming</p>
      </LearnClassProps> */}


      {/* ======== = setState From Here Onwards = ==========  */}
      <ChangeMessage />
      <Counter />


    </div >
  );
}

export default App;
