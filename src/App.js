import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header.js";
import PoolStats from "./components/Poolstats.js";
import EstimatedPoolPrize from "./components/EstimatedPoolPrize.js";
import Poolbutton from "./components/Poolbutton.js";
import Web3 from "web3";
import ConnectWallet from "./components/Connectwallet.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nothing: "",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <ConnectWallet />
        <body>
          <EstimatedPoolPrize />
          <PoolStats />
          <Poolbutton />
        </body>
      </div>
    );
  }
}

export default App;
