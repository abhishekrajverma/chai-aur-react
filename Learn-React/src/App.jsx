import { useState } from "react";
import "./App.css";
import Card from "./pages/Card";

function App() {
  let [count, setCount] = useState(0); // useState returns an array with two elements, the first element is the state variable and the second element is the function to update the state variable. use to propogate the changes to the UI.
  console.log(`count: ${count}`);

  const increaseCount = () =>{
    if(count < 20) {
      setCount(count + 1)
    }
  }
  
  return (
    <>
      <h1 className="bg-green-500 rounded-xl m-4">Counter: {count}</h1>
      <button
        onClick={increaseCount}
      >
        Increment: {count}
      </button>
      <br /> <br />
      <button
        className="m-4"
        onClick={() => {
          if (count > 0) setCount((count -= 1));
        }}
      >
        Decrement: {count}
      </button>
      <Card name ='Abhishek' data = 'This is demo paragraph 1' />
      <Card name= 'Aman'data= 'This is demo paragraph 2' />
    </>
  );
}

export default App;
