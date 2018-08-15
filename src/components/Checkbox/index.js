import React, { Component } from 'react';

import './index.css';

class Checkbox extends Component {

  onChange = e => {
    const { onCheck, onUnCheck, value } = this.props;
    if (e.target.checked) {
      onCheck(value);
    } else {
      onUnCheck(value);
    }
  }

  onOnlyBtnClick = () => {
    const { onOnlyBtnClick, value } = this.props;
    onOnlyBtnClick(value);
  }

  render() {
    const { value, label, checked, onlyBtn } = this.props;
    const id = 'id' + value;
    return (
      <div className='checkbox'>
        <input
          type='checkbox'
          className='checkbox__input'
          onChange={this.onChange}
          checked={checked}
          id={id}
        />
        <label className='checkbox__label' htmlFor={id}>
          {label}
        </label>
        { onlyBtn ?
          <button
            className='checkbox__only'
            onClick={this.onOnlyBtnClick}
          >
            только
          </button> : null }
      </div>
    );
  }
}

export default Checkbox;
