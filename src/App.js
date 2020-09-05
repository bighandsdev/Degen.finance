import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header.js";
import Lend from "./components/Lend.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <body>
        <Lend />
      </body>
    </div>
  );
}

export default App;
