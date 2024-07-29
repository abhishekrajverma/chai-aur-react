import { useState, useEffect } from "react";
function BgChanger() {
  const [colour, setColour] = useState("white");

  useEffect(() => {
    document.body.style.backgroundColor = colour;
  }, [colour]);

  return (
    <>
      <header className="flex justify-start">
        <button
          onClick={() => setColour("red")}
          className="mr-3 bg-red-600 rounded-full"
        >
          Red
        </button>
        <button
          onClick={() => setColour("blue")}
          className="mr-3 bg-blue-600 rounded-full"
        >
          Blue
        </button>
        <button
          onClick={() => setColour("green")}
          className="mr-3 bg-green-600 rounded-full"
        >
          Green
        </button>
        <button
          onClick={() => setColour("black")}
          className="mr-3 bg-black rounded-full"
        >
          Black
        </button>
      </header>
    </>
  );
}

export default BgChanger;
