import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(7);

  // let counter = 7;
  const addValue = () => {
    // console.log("value added",Math.random());
    // counter = counter+1;
    setCounter(counter + 1);
    // console.log("Clicked", counter);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Mahesh Kushwaha</h1>
      <h2>Counter Value :{counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value: {counter}</button>
      <p>Footer : {counter}</p>
    </>
  );
}

export default App;
