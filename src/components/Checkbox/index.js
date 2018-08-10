import React, { Component } from 'react';

class Checkbox extends Component {
  render() {
    return (
      <div className='checkbox'>
        <input type='checkbox' className='checkbox__input' />
        <label className='checkbox__label'>
          <span>{this.props.label}</span>
          { this.props.onlyBtn ? <button className='checkbox__only'>только</button> : null }
        </label>
      </div>
    );
  }
}

export default Checkbox;
