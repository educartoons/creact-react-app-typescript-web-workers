import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

// @ts-ignore
import MyWorker from './workers/example.worker.ts';
const w = new MyWorker();

function App() {
  const [message, setMessage] = useState("This message will be replaced by the returned message by the web worker in 3 secs");
  useEffect(()=>{
    w.onmessage = (e: any) => {
      setMessage(e.data)
    }
    w.postMessage('App.tsx');
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {message}
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
}

export default App;
