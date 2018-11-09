import React, { Component } from 'react';
import './nav.scss';
import { push as Menu } from 'react-burger-menu';
import { Link } from "react-router-dom";
import db from '../../../../db/index';
// import firebase from 'firebase';
// require("firebase/firestore");



// Icons
import { Icon } from 'react-icons-kit';
import {user} from 'react-icons-kit/icomoon/user';
import { home } from 'react-icons-kit/icomoon/home';
import {list2} from 'react-icons-kit/icomoon/list2';
import {pencil} from 'react-icons-kit/icomoon/pencil';



export default class Navigation extends Component {
  constructor() {
    super();
    
    // this.state = {
    //   questions: [],
    // }
    // this.handleDropdown.bind(this);
  }

  async componentWillMount() {
    // this.handleDropdown();
    // console.log(this.state.questions)
    const docRef =  await db.collection("cms/studyguide/toc");
    
    docRef.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // console.log(doc);
        this.state.questions.push(doc.id)
      })
    })
    console.log('component will mount')
  }
  handleDropdown() {
    

    const item = document.getElementById('list-item');
    const display = item.style.display;
    item.style.display = display == "inherit" ? 'none' : "inherit"
  }

  render() {
    console.log('render()')
    let { questions } = this.state;

    return(
      <Menu left id="burger" pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/" className="bm-item-list">
                <Icon icon={home} size={18} className="icon"/>{' '}Home</Link>
            </li>
            <li>
              <a href="#" className="bm-item-list" onClick={this.handleDropdown.bind(this)} id="toc">
                <Icon icon={list2} size={18} className="icon" />{' '}
                Table of Contents
              </a>
              <ol id="list-item">
                {questions.map((question) => 
                <li><Link to="/page" className="bm-item-list indent" key={question}>{question}</Link></li>
                )}               
              </ol>
            </li>
            <li><Link to="/editor" className="bm-item-list">
              <Icon icon={pencil} size={18} className="icon" />{' '}Editor</Link>
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

{/* <li><a href="#" className="bm-item-list indent">HTML Questions</a></li>
<li><a href="#" className="bm-item-list indent">CSS Questions</a></li>
<li><a href="#" className="bm-item-list indent">JS Questions</a></li>
<li><a href="#" className="bm-item-list indent">Accessibility Questions</a></li>
<li><a href="#" className="bm-item-list indent">Testing Questions</a></li>
<li><a href="#" className="bm-item-list indent">Performance Questions</a></li>
<li><a href="#" className="bm-item-list indent">Network Questions</a></li>
<li><a href="#" className="bm-item-list indent">Coding Questions</a></li>
<li><a href="#" className="bm-item-list indent">Fun Questions</a></li> */}