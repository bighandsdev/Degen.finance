import React from "react";
import "./PoolStats.css";

export default class Lend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 20,
      minutes: 23,
      hours: 5,
      days: 1,
    };
  }

  render() {
    return (
      <div className="container">
        <h1 id="timeemoji">⏳</h1>
        <p>Time until next payout</p>
        <div className="flexbox">
          <tr>
            <td className="flexboxnumber">{this.state.seconds}</td>
            <td className="flexboxnumber">{this.state.minutes}</td>
            <td className="flexboxnumber">{this.state.hours}</td>
            <td className="flexboxnumber">{this.state.days}</td>
          </tr>
          <tr>
            <td className="flexboxtext">seconds</td>
            <td className="flexboxtext">minutes</td>
            <td className="flexboxtext">hours</td>
            <td className="flexboxtext">days</td>
          </tr>
        </div>
      </div>
    );
  }
}
