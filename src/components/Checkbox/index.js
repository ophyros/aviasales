import React from 'react';

import './index.css';

const Checkbox = ({ value,
                    label,
                    checked,
                    onlyBtn,
                    onCheck,
                    onUnCheck,
                    onOnlyBtnClick }) => {

  const handleChange = e => {
    if (e.target.checked) {
      onCheck(value);
    } else {
      onUnCheck(value);
    }
  }

  const handleClick = () => {
    onOnlyBtnClick(value);
  }

  return (
    <div className='checkbox'>
      <input
        type='checkbox'
        className='checkbox__input'
        onChange={handleChange}
        checked={checked}
        id={'id' + value}
      />
      <label className='checkbox__label' htmlFor={'id' + value}>
        {label}
      </label>
      { onlyBtn ?
        <button
          className='checkbox__only'
          onClick={handleClick}
        >
          только
        </button> : null }
    </div>
  );
}

export default Checkbox;
