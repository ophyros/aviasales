import React, { Component } from 'react';

import Checkbox from '../Checkbox';

class CheckboxesList extends Component {
  render() {
    return (
      <ul className='checkboxes-list'>
        <li className='checkboxes-list__item'>
          <Checkbox label='Все' onlyBtn={false} />
        </li>
        <li className='checkboxes-list__item'>
          <Checkbox label='Без пересадок' onlyBtn={true} />
        </li>
        <li className='checkboxes-list__item'>
          <Checkbox label='1 пересадка' onlyBtn={true} />
        </li>
        <li className='checkboxes-list__item'>
          <Checkbox label='2 пересадки' onlyBtn={true} />
        </li>
        <li className='checkboxes-list__item'>
          <Checkbox label='3 пересадки' onlyBtn={true} />
        </li>
      </ul>
    );
  }
}

export default CheckboxesList;
