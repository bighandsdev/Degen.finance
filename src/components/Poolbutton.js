import React from "react";
import "./Poolbutton.css";
import detectEthereumProvider from "@metamask/detect-provider";
import Web3 from "web3";

export default class Poolbutton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      estimatedPrize: 100,
      ethSymbol: "Ξ",
    };
  }

  render() {
    if (typeof window.ethereum !== "undefined") {
      console.log("MetaMask is installed!");
      window.ethereum.request({ method: "eth_requestAccounts" });
      // From now on, this should always be true:
      // provider === window.ethereum
      return (
        <div className="container" onClick={() => {}}>
          <a id="joinpool">Join Pool</a>
        </div>
      );
    } else {
      console.log("Please install MetaMask!");
      return (
        <div
          className="container"
          onClick={() => {
            alert("hell");
          }}
        >
          <a id="joinpool">Install MetaMask</a>
        </div>
      );
    }
  }
}
