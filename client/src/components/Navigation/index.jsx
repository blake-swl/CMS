import React, { Component } from 'react';
import './nav.scss';
import { elastic as Menu } from 'react-burger-menu';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";



// Icons
import { Icon } from 'react-icons-kit';
import {user} from 'react-icons-kit/icomoon/user';
import { home } from 'react-icons-kit/icomoon/home';
import {list2} from 'react-icons-kit/icomoon/list2';



export default class Navigation extends Component {
  constructor() {
    super();

    // this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    // window.addEventListener('scroll', this.handleScroll);
  }
  // Sticky Nav
  // handleScroll() {  
  //   const navbar = document.getElementById("nav");

  //   const sticky = navbar.offsetTop;

  //   if (window.pageYOffset >= sticky) {
  //     navbar.classList.add("sticky")
  //   } else {
  //     navbar.classList.remove("sticky");
  //   }
  // }
  
  render() {
    return(
      <div className="nav-container">
        {/* <div id="nav">
          <ul>
            <li className="logo"><a href="https://blakeswl.me">BL</a></li>
          </ul>
        </div> */}

        <Menu left id="burger" pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
          <nav className="nav">
            <ul>
              <li>
                <Link to="/" className="bm-item-list">
                  <Icon icon={home} size={20} className="icon"/>{' '}Home</Link>
              </li>
              <li>
                <a href="#" className="bm-item-list">
                  <Icon icon={list2} size={20} className="icon" />{' '}
                  Table of Contents</a>
                <ol>
                  <li><a href="#" className="bm-item-list indent">General Questions</a></li>
                  <li><a href="#" className="bm-item-list indent">HTML Questions</a></li>
                  <li><a href="#" className="bm-item-list indent">CSS Questions</a></li>
                  <li><a href="#" className="bm-item-list indent">JS Questions</a></li>
                  <li><a href="#" className="bm-item-list indent">Accessibility Questions</a></li>
                  <li><a href="#" className="bm-item-list indent">Testing Questions</a></li>
                  <li><a href="#" className="bm-item-list indent">Performance Questions</a></li>
                  <li><a href="#" className="bm-item-list indent">Network Questions</a></li>
                  <li><a href="#" className="bm-item-list indent">Coding Questions</a></li>
                  <li><a href="#" className="bm-item-list indent">Fun Questions</a></li>
                </ol>
              </li>
              <li><Link to="/login" className="bm-item-list">
                <Icon icon={user} size={20} className="icon" />{' '}Login</Link>
              </li>
            </ul>
          </nav>
        </Menu>
      </div>
      )   
    }
  };
