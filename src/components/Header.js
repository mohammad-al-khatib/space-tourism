import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuIconClicked: false,
    };
  }

  toggle = () => {
    this.setState({ menuIconClicked: !this.state.menuIconClicked });
  };

  render() {
    const {menuIconClicked} = this.state;

    return (
      <div className="nav">
        <NavLink to="/">
          <img src="../assets/shared/logo.svg" alt="logo" className="logo" />
        </NavLink>
        <div
          className={`nav-links ${
            menuIconClicked ? "active" : ""
          }`}
        >
          <NavLink end className='link' activeClassName='active'to="/"><span>00</span> HOME</NavLink>
          <NavLink className='link' activeClassName='active'to="destination"><span>01</span> DESTINATION</NavLink>
          <NavLink className='link' activeClassName='active' to="crew"><span>02</span> CREW</NavLink>
          <NavLink className='link' activeClassName='active'to="technology"><span>03</span> TECHNOLOGY</NavLink>
        </div>
        {!menuIconClicked ? (
          <img
            src="../assets/shared/icon-hamburger.svg"
            alt="burger menu icon"
            className="burger-menu"
            onClick={this.toggle}
          />
        ) : (
          <img
            src="../assets/shared/icon-close.svg"
            alt="close icon"
            className="close-icon"
            onClick={this.toggle}
          />
        )}
      </div>
    );
  }
}

export default Header;
