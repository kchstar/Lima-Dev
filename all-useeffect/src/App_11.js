// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [number, setNumber] = useState(0);
  console.count("component rendered!");
  return (
    <div >
      <span>You clicked {number} times </span>
      <button onClick={() => setNumber ((prev) => prev + 1)}>
        Increase
      </button>
      
    </div>
  );
}

export default App;
