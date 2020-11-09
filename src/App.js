import React, { useState } from "react";
import Main from "./Containers/Main";
import Nav from "./Containers/Nav";

import { InitialState } from "./State";
import "./App.css";

function App() {
  const [state] = useState(InitialState);

  return (
    <div>
      <h1 className="name">Samuel Teklay</h1>
      <div className="container">
        <Main state={state} />
        <Nav state={state} />
      </div>
    </div>
  );
}

export default App;
