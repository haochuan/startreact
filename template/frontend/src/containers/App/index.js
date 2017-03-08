import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import './style.css';

export class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { value } = this.props;
    return (
      <div className="app">
        <div className="app-header" />
        <div className="app-container">
          {this.props.children}
        </div>
        <div className="app-footer" />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(App);