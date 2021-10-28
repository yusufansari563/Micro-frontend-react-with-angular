import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState} from 'react';
import { load } from 'web-component-load';

function App() {
  const [reactInputValue, setReactInputValue] = useState('');
  const [angularInputValue, setAngularInputValue] = useState('');

  useEffect(() => {
    load('http://localhost:4200');
    // load('http://localhost:55126/');
  }, []);
 
  document.addEventListener('angular-input-event', function (e) {
    setAngularInputValue(e.detail);
  }, { capture: true });

  return (
    <div className="app">
      <div><b>React App</b></div>
      <div>Value from Angular Component: {angularInputValue}</div>
      <div>
        <input
          onChange={(e) => setReactInputValue(e.target.value)}
          value={reactInputValue}
        />
      </div>
      <div><imh-question
      button-font-size={"30"}
      button-font-color={"red"}
      button-font-colorBG={"green"}
      button-border-radius={"4"}
      question-font-size={"30"}
      question-font-color={"pink"}
      QuesOption-font-size={"30"}
      QuesOption-font-color={"yellow"} 
      /></div>
    </div>
  )
}

export default App;
