import React, { Component } from 'react';

import spinner from './spinner.gif';

import './index.css';

class Loader extends Component {
  render() {
    return (
      <div className='loader'>
        <img src={spinner} alt='' />
      </div>
    );
  }
}

export default Loader;
