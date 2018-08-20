import React from 'react';

import spinner from './spinner.gif';

import './index.css';

const Loader = () => (
  <div className='loader'>
    <img src={spinner} alt='' />
  </div>
);

export default Loader;
