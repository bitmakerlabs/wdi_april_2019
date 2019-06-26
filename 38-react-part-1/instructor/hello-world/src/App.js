import React from 'react';
import './App.css';
import Greeting from './Greeting';

const App = () => {
  return (
    <div>
      <Greeting firstName="Grace" lastName="Hopper" />
      <Greeting firstName="Alan" lastName="Turing" />
    </div>
  );
}

export default App;
