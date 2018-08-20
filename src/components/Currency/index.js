import React from 'react';

import './index.css';

const Currency = ({ label, value, checked, onChange }) => {

  const handleChange = (e) => {
    onChange(e.target.value);
  }

  return (
    <div className='currency'>
      <input
        type='radio'
        name='currency'
        className='currency__input'
        value={value}
        checked={checked}
        onChange={handleChange}
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

export default Currency;
