import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header.js";
import PoolStats from "./components/Poolstats.js";
import EstimatedPoolPrize from "./components/EstimatedPoolPrize.js";
import Poolbutton from "./components/Poolbutton.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <body>
        <EstimatedPoolPrize />
        <PoolStats />
        <Poolbutton />
      </body>
    </div>
  );
}

export default App;
