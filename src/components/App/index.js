import React, { Component } from 'react';

import Filter from '../Filter';
import TicketsList from '../TicketsList';

import './index.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app__header">
          <a className="app__logo" href="https://aviasales.ru">Aviasales.ru</a>
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
  }
}

export default App;
