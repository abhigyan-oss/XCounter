import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(1); // or 0 based on your current state

  return (
    <div style={{ padding: "20px" }}>
      <h1>Counter App</h1>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}

export default App;
