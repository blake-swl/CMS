import React, { Component } from 'react';
import {Editor as Edit, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';

export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
  }
  render() {
    return (
      <div id="page-wrap" className="editor">
        <Edit editorState={this.state.editorState} onChange={this.onChange} />
      </div>
    );
  }
}