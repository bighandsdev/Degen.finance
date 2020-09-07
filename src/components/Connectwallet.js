import React, { useState } from "react";
import "./Connectwallet.css";
import { ethers } from "ethers";
import detectEthereumProvider from "@metamask/detect-provider";
import Web3 from "web3";

export default function ConnectWallet() {
  const ethereum = window.ethereum;
  const [addr, setAddr] = useState("");

  function handleClick() {
    async function getAccount() {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];
      setAddr(account);
    }
  }

  if (addr !== "") {
    return (
      <div
        id="ConnectedWallet"
        className="container"
        onClick={() => {
          handleClick();
        }}
      >
        <a>{addr}</a>
      </div>
    );
  } else {
    return (
      <div
        id="ConnectWallet"
        className="container"
        onClick={() => {
          handleClick();
        }}
      >
        <a>Connect</a>
      </div>
    );
  }
}
