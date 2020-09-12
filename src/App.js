import React from 'react';
import Counter from './SetStateExample';
import ChangeName from './UseEffectExample';
import './App.css';

function App() {
  return (
    <div className="App">
     <ChangeName />
     <Counter />
    </div>
  );
}

export default App;
