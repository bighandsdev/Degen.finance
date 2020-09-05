import React from "react";
import "./Poolbutton.css";

export default class Poolbutton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      estimatedPrize: 100,
      ethSymbol: "Ξ",
    };
  }

  render() {
    return (
      <div className="container">
        <a id="joinpool">Join Pool</a>
      </div>
    );
  }
}
