import React, { Component } from 'react';
import { connect } from 'react-redux';

import Filter from '../Filter';
import TicketsList from '../TicketsList';

import './index.css';

class App extends Component {
  render() {
    const { tickets, stopsFilter, currencies } = this.props;
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
            <TicketsList
              tickets={tickets}
              stopsFilter={stopsFilter.selectedOptions}
              currencies={currencies}
            />
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tickets: state.tickets.sort( (prev, next) => prev.price > next.price ),
  stopsFilter: state.stopsFilter,
  currencies: state.currencies
});

export default connect(mapStateToProps)(App);

