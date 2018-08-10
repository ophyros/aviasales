import React, { Component } from 'react';

import Currency from '../Currency';

class CurrenciesList extends Component {
  render() {
    return (
      <ul className='currencies-list'>
        <li className='checkboxes-list__item'>
          <Currency label='RUB' />
        </li>
        <li className='checkboxes-list__item'>
          <Currency label='USD' />
        </li>
        <li className='checkboxes-list__item'>
          <Currency label='EUR' />
        </li>
      </ul>
    );
  }
}

export default CurrenciesList;
