import React, { Component } from 'react';
import Editing from 'react-medium-editor';
import './editor.scss';

require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/default.css');

export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(text, medium) {
    this.setState({text: medium});
  }

  render() {
    return (
      <div id="page-wrap" className="editor">
        <h1>Edit here</h1>
        {/* <h3>{this.state.text}</h3> */}
        <Editing   
          tag="pre"
          text={this.state.text}
          onChange={this.handleChange}
          options={{toolbar: {buttons: ['bold', 'italic', 'underline', 'h1', 'h2', 'h3']}}}
          className="texteditor"
        />
      </div>
    );
  }
}