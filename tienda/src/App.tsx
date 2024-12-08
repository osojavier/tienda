import { useState } from "react";
import "./App.css";

function App() {
  const [Incre, setIncre] = useState(0);
  const [Decre, setDecre] = useState(0);

  return (
    <>
      <h1>Vite + React + Ts</h1>
      <div className="card">
        <button onClick={() => setIncre((Incre) => Incre + 1)}>
          count is {Incre}
        </button>

        <button onClick={() => setDecre((Decre) => Decre - 1)}>
          <code>count is {Decre} </code>
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
