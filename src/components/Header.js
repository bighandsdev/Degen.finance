import React from "react";
import "./Header.css";

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <h1 className="firstpartoftitle">
          {" "}
          🧙🏼‍♂️ <p className="secondpartoftitle">DegenFinance</p>
        </h1>
      </div>
    );
  }
}
