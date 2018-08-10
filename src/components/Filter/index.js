import React, { Component } from 'react';

import CurrenciesList from '../CurrenciesList';
import CheckboxesList from '../CheckboxesList';

class Filter extends Component {
  render() {
    return (
      <div className='filter'>
        <section className='filter__section'>
          <header className='filter__header'>
            Валюта
          </header>
          <div className='filter__controls'>
            <CurrenciesList />
          </div>
        </section>
        <section className='filter__section'>
          <header className='filter__header'>
            Количество пересадок
          </header>
          <div className='filter__controls'>
            <CheckboxesList />
          </div>
        </section>
      </div>
    );
  }
}

export default Filter;
