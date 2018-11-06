import React, { Component } from 'react';
import './nav.scss';
import { push as Menu } from 'react-burger-menu';
import { Link } from "react-router-dom";



// Icons
import { Icon } from 'react-icons-kit';
import {user} from 'react-icons-kit/icomoon/user';
import { home } from 'react-icons-kit/icomoon/home';
import {list2} from 'react-icons-kit/icomoon/list2';



export default class Navigation extends Component {
  constructor() {
    super();

  }

  
  render() {
    return(
      <Menu left id="burger" pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/" className="bm-item-list">
                <Icon icon={home} size={18} className="icon"/>{' '}Home</Link>
            </li>
            <li>
              <a href="#" className="bm-item-list">
                <Icon icon={list2} size={18} className="icon" />{' '}
                Table of Contents</a>
              <ol>
                <li><Link to="/page" className="bm-item-list indent">General Questions</Link></li>
                {/* <li><a href="#" className="bm-item-list indent">HTML Questions</a></li>
                <li><a href="#" className="bm-item-list indent">CSS Questions</a></li>
                <li><a href="#" className="bm-item-list indent">JS Questions</a></li>
                <li><a href="#" className="bm-item-list indent">Accessibility Questions</a></li>
                <li><a href="#" className="bm-item-list indent">Testing Questions</a></li>
                <li><a href="#" className="bm-item-list indent">Performance Questions</a></li>
                <li><a href="#" className="bm-item-list indent">Network Questions</a></li>
                <li><a href="#" className="bm-item-list indent">Coding Questions</a></li>
                <li><a href="#" className="bm-item-list indent">Fun Questions</a></li> */}
              </ol>
            </li>
            <li><Link to="/login" className="bm-item-list">
              <Icon icon={user} size={18} className="icon" />{' '}Login</Link>
            </li>
          </ul>
        </nav>
      </Menu>
    )   
  }
};
