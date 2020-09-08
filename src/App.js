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

  async function getAccount() {
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = accounts[0];
    setAddr(account);
  }
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <ConnectWallet getAccount={() => getAccount()} addr={addr} />
      <body>
        <EstimatedPoolPrize />
        <PoolStats />
        <Poolbutton />
      </body>
    </div>
  );
}

export default App;
