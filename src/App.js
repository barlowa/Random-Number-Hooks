import React, { useEffect, useState } from "react";
import { useCounter, useRandomNumber } from "./Components/Hooks";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, more, less] = useCounter();
  const [randomNumber, generate] = useRandomNumber({ maximum: 40 });
  const [isShowing, setIsShowing] = useState(false);
  const [lastGenerated, setLastGenerated] = useState({ lastCount: 0, lastRandom: 0 })

  useEffect(() => {
    const { lastCount, lastRandom } = lastGenerated
    if ((lastRandom !== randomNumber) || (lastCount !== count)) {
      setIsShowing(false);
      setLastGenerated({ lastCount: count, lastRandom: randomNumber })
    }
  }, [count, generate, lastGenerated, randomNumber]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="buttonWrapper">
          <h1>{`${randomNumber} X ${count}`}</h1>
          <button onClick={more}>+</button>
          <button onClick={generate}>Generate</button>
          <button onClick={less}>-</button>
        </div>
        <br />
        {isShowing ? (
          <p>{`${randomNumber} X ${count} = ${randomNumber * count}`}</p>
        ) : (
            <button onClick={() => setIsShowing(true)}>Show Me The Answer</button>
          )}
      </header>
    </div>
  );
}

export default App;
