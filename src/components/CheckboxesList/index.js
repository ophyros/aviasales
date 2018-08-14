import React, { Component } from 'react';

import Checkbox from '../Checkbox';

import { plural } from '../../utils';

class CheckboxesList extends Component {
  render() {
    const {
      availableOptions,
      selectedOptions,
      addStopsToFilter,
      removeStopsFromFilter,
      setOneStopToFilter,
      resetStopsFilter
    } = this.props;

    const checkboxes = availableOptions.map( option => {
      return (
        <li className='checkboxes-list__item' key={option}>
          <Checkbox
            label={option === 0 ? 'Без пересадок' : option + ' ' + plural(option, ['пересадка', 'пересадки', 'пересадок'])}
            onlyBtn={true}
            value={option}
            onCheck={addStopsToFilter}
            onUnCheck={removeStopsFromFilter}
            onOnlyBtnClick={setOneStopToFilter}
            checked={selectedOptions.indexOf(option) > -1}
          />
        </li>
      )
    })

    return (
      <ul className='checkboxes-list'>
        <li className='checkboxes-list__item'>
          <Checkbox
            label='Все'
            onlyBtn={false}
            onCheck={resetStopsFilter}
            onUnCheck={() => false}
            checked={!selectedOptions.length}
          />
        </li>
        {checkboxes}
      </ul>
    );
  }
}

export default CheckboxesList;
