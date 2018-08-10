import React, { Component } from 'react';

class Currency extends Component {
  render() {
    return (
      <div className='currency'>
        <input type='radio' name='currency' className='currency__input' />
        <label className='currency__label'>
          {this.props.label}
        </label>
      </div>
    );
  }
}

export default Currency;
