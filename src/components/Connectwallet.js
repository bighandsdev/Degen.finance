import React from "react";
import "./Connectwallet.css";
import { ethers } from "ethers";
import detectEthereumProvider from "@metamask/detect-provider";
import Web3 from "web3";

export default class ConnectWallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: this.props.address,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.connect();
  }

  render() {
    return (
      <div
        onClick={() => {
          this.handleClick();
        }}
        id="ConnectWallet"
        className="container"
      >
        <a>Connect</a>
      </div>
    );
  }
}
