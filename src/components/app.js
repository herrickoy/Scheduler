import React, { Component } from 'react';
import Library from './library';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Scheduler</h1>
        <Library />
      </div>
    );
  }
}
