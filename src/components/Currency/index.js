import React, { Component } from 'react';

class Currency extends Component {
  render() {
    const { label } = this.props;
    return (
      <div className='currency'>
        <input type='radio' name='currency' className='currency__input' />
        <label className='currency__label'>
          {label}
        </label>
      </div>
    );
  }
}

export default Currency;
