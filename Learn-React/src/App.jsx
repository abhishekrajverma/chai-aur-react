import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0); // useState returns an array with two elements, the first element is the state variable and the second element is the function to update the state variable. use to propogate the changes to the UI.
  console.log("count", count);
  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment: {count}</button>
      <br /> <br />
      <button onClick={() => setCount(count - 1)}>Decrement: {count}</button>
    </>
  );
}

export default App;
