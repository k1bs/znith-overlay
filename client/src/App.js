import React, { useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import logo from './logo.svg';
import './App.css';

const App = () => {
  useEffect(() => {
    const socket = socketIOClient('http://localhost:3771/client');
    socket.on('fromServer', (data) => console.log(data));
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          {' '}
          <code>src/App.js</code>
          {' '}
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
