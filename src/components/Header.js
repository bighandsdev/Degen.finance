import React from "react";
import "./Header.css";

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <h1 id="firstpartoftitle">
          {" "}
          🧙🏼‍♂️ <p id="secondpartoftitle">DegenFinance</p>
        </h1>
      </div>
    );
  }
}
