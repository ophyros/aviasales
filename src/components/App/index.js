import React from 'react';

import Filter from '../Filter';
import TicketsList from '../TicketsList';

import './index.css';
import logo from './logo.svg';

const App = () => (
  <div className='app'>
    <header className='app__header'>
      <a className='app__logo' href='https://aviasales.ru'>
        <img src={logo} alt='aviasales' />
      </a>
    </header>
    <section className='app__container'>
      <aside className='app__sidebar'>
        <Filter />
      </aside>
      <div className='app__tickets'>
        <TicketsList />
      </div>
    </section>
  </div>
);

export default App;
