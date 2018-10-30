import React, { Component } from 'react';
import './nav.scss';
import { slide as Menu } from 'react-burger-menu';

export default class Navigation extends Component {
  // showSettings(e) {
  //   e.preventDefault();
  // }

  render() {
    return(
      <Menu right>
        <nav id="nav" className="nav">
          <ul>
            <li>
              <a href="#" className="bm-item-list">Home</a>
            </li>
            <li>
              <a href="#" className="bm-item-list">Table of Contents</a>
              <ol>
                <li><a href="#" className="bm-item-list">General Questions</a></li>
                <li><a href="#" className="bm-item-list">HTML Questions</a></li>
                <li><a href="#" className="bm-item-list">CSS Questions</a></li>
                <li><a href="#" className="bm-item-list">JS Questions</a></li>
                <li><a href="#" className="bm-item-list">Accessibility Questions</a></li>
                <li><a href="#" className="bm-item-list">Testing Questions</a></li>
                <li><a href="#" className="bm-item-list">Performance Questions</a></li>
                <li><a href="#" className="bm-item-list">Network Questions</a></li>
                <li><a href="#" className="bm-item-list">Coding Questions</a></li>
                <li><a href="#" className="bm-item-list">Fun Questions</a></li>
              </ol>
            </li>
            <li><a href="#login" className="bm-item-list">Login</a></li>
          </ul>
        </nav>
      </Menu>
    )
  }
};

      {/* <ul>

      </ul>
      <a href="#" className="menu-item">General Questions</a>
      <a href="#" className="menu-item">HTML Questions</a>
      <a href="#" className="menu-item">CSS Questions</a>
      <a href="#" className="menu-item">JS Questions</a>
      <a href="#" className="menu-item">Accessibility Questions</a>
      <a href="#" className="menu-item">Testing Questions</a>
      <a href="#" className="menu-item">Performance Questions</a>
      <a href="#" className="menu-item">Network Questions</a>
      <a href="#" className="menu-item">Coding Questions</a>
      <a href="#" className="menu-item">Fun Questions</a> */}
// export default Navigation;