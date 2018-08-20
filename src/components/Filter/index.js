import React from 'react';

import CurrenciesList from '../CurrenciesList';
import StopsFilter from '../StopsFilter';

import './index.css';

const Filter = () => (
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
        <StopsFilter />
      </div>
    </section>
  </div>
);

export default Filter;
