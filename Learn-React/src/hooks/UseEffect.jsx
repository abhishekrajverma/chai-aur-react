import { useEffect, useState } from "react";

/* The useEffect hook in React is used to handle side effects in functional components. In simple terms, it's a way to run some code when your component first loads, updates, or when it’s about to be removed. Here’s an easy way to understand it: useEffect is like componentDidMount, componentDidUpdate, and componentWillUnmount combined in class components.
            What useEffect Does Here:

    1.Initial Load: When the ItemList component is first added to the screen, the useEffect hook runs the code inside it. In this case, it fetches data from an API.
    2.Dependencies Array: The empty array [] means the effect runs only once, when the component first loads. If you put variables in the array, the effect would run again whenever those variables change.
    3.Cleanup: If you return a function from useEffect, React will run it when the component is removed from the screen. This is useful for cleaning up things like event listeners or timers.

                When to Use useEffect

    1.Fetching Data: To get data from an API when your component loads.
    2.Subscribing/Unsubscribing: To set up or clean up subscriptions, like WebSocket connections or event listeners.
    3.Updating State: To update the state or perform actions when certain data or props change.
*/

function UseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect Called");
  }); // case: 1- useEffect Called every time when the component is rendered or re-rendered (componentDidMount, componentDidUpdate)

  useEffect(() => {
    console.log("useEffect Called only once");
  }, []); // case: 2- useEffect Called only once when the component is rendered (componentDidMount)

  useEffect(() => {
    console.log("useEffect Called when count is changed");
  }, [count]); // case: 3- useEffect Called when the count is changed (componentDidUpdate)

  return (
    <>
      <h1 className="pb-4">Counter: {count}</h1>
      <button
        onClick={() => setCount(count + 1)}
        className="rounded-full text-lg text-opacity-15 "
      >
        Click For Increase Counter
      </button>
      <button
        onClick={() => setCount(count - 1)}
        className="rounded-full text-lg text-opacity-15 "
      >
        Click For Decrease Counter
      </button>
    </>
  );
}

export default UseEffect;
