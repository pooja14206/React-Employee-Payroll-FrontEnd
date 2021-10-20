import React, { Component } from "react";
import "./Header.css";
// import logo from './assets/logo.png';

export default class header extends Component {

    // logo = require('./assets/logo.png');
  render() {
    return (
      <div className="header-content header">
        <div className="logo-content">
          <img src="./assets/logo.png" alt="Logo" />
          <div className="logo-text-content">
            <span className="mp-text">EMPLOYEE</span>
            <span className="emp-text emp-payroll">PAYROLL</span>
          </div>
        </div>
      </div>
    );
  }
}