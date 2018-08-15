import React, { Component } from 'react';

import './index.css';

class Currency extends Component {

  onChange = (e) => {
    const { onChange } = this.props;
    onChange(e.target.value);
  }

  render() {
    const { label, value, checked } = this.props;
    return (
      <div className='currency'>
        <input
          type='radio'
          name='currency'
          className='currency__input'
          value={value}
          checked={checked}
          onChange={this.onChange}
          id={value}
        />
        <label
          className='currency__label'
          htmlFor={value}
        >
          {label}
        </label>
      </div>
    );
  }
}

export default Currency;
