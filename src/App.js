import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header.js";
import PoolStats from "./components/Poolstats.js";
import EstimatedPoolPrize from "./components/EstimatedPoolPrize.js";
import Poolbutton from "./components/Poolbutton.js";
import Web3 from "web3";
import ConnectWallet from "./components/Connectwallet.js";
const web3 = new Web3(Web3.givenProvider);

function App() {
  const ethereum = window.ethereum;
  const [addr, setAddr] = useState("");

  function connectEthereumWallet() {
    if (ethereum) {
      ethereum.on("accountsChanged", function (accounts) {
        setAddr(accounts[0]);
      });
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <ConnectWallet address={addr} connect={connectEthereumWallet()} />
      <body>
        <EstimatedPoolPrize />
        <PoolStats />
        <Poolbutton />
      </body>
    </div>
  );
}

export default App;
