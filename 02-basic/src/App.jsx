import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [add, setAdd] = useState(0);

  const addValue = () => {
    if (add < 50) {
      setAdd(add + 1);
    }
  };

  const removeValue = () => {
    if (add > 0) {
      setAdd(add - 1);
    }
  };

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter value : {add}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
