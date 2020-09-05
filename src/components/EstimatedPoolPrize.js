import React from "react";
import "./EstimatedPoolPrize.css";

export default class Lend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      estimatedPrize: 100,
      ethSymbol: "Ξ",
    };
  }

  render() {
    return (
      <div className="container2">
        <div>
          {" "}
          <h1 id="estimatedprizetitle">Estimated prize</h1>
        </div>
        <div id="estimatedprizeamount">
          <h1 classname="est">
            {this.state.ethSymbol}
            {this.state.estimatedPrize}
          </h1>
        </div>
      </div>
    );
  }
}
