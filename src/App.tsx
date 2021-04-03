import React from 'react';
import './App.css';
import Parent from './components/parent/parent.component';
import Hook from './components/hook/hook.component';

function App() {
  return (
    <div className="App">
      <Hook />
      <Parent />
    </div>
  );
}

export default App;
