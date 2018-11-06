import React, { Component } from 'react';
import "./home.scss";

export default class Home extends Component {
  render() {
    return(
      <div id="page-wrap" className="home">
        <div className="home-left">
          <div className="title">
            {/* <div className="title-layer"> */}
            <h1>BLAKE S LEE</h1>
            <p>Software engineer, coffee addict, LeBron James fanatic.</p>
            <a href="https://blakeswl.me">
             <button>VISIT WEBSITE</button>
            </a>
            {/* </div> */}
          </div>
        </div>
        <div className="home-right">
  
        </div>
      </div>
    )
  }
};
