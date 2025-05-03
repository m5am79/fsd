import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="sd">
        <h1>Michael H.</h1>
        <h2>Smaller Headline</h2>
        <a className="fs" href="https://Google.ca">
          Go
        </a>
        <ul className="weg">
          <li>Item</li>
          <li>Other</li>
        </ul>
      </div>
    </>
  );
}

export default App;
