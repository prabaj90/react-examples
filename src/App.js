import React from 'react';
import Counter from './SetStateExample';
import CounterWithName from './UseEffectExample';
import './App.css';

function App() {
  return (
    <div className="App">
     <CounterWithName />
      <Counter />
    </div>
  );
}

export default App;
