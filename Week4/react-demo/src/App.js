import logo from './logo.svg';
import './App.css';
import Component from './Component.js';
import {React, useState, useEffect} from "react";

function App() {

  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count+1)
    //console.log(count)
  }

  useEffect(() => {
    // setCount(count + 1) //WILL CAUSE AN INFINITE LOOP
    console.log(count); // everytime this state variable changes "count" then it prints this out
  }, [count]); // eveyrtime this variable changes, AS WELL AS the first time the page is ran!!!

  return (
    <div className="App">
      <button onClick={handleClick}>{count}</button>
    </div>
  );
}

export default App;
