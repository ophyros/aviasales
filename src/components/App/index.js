import React, { Component } from 'react';
import { connect } from 'react-redux';

import Filter from '../Filter';
import TicketsList from '../TicketsList';

import './index.css';

class App extends Component {
  render() {
    const { tickets, stopsFilter } = this.props;
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
            />
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  // status: state.status,
  tickets: state.tickets.sort( (prev, next) => prev.price > next.price ),
  stopsFilter: state.stopsFilter,
  // currency: state.currency
});

export default connect(mapStateToProps)(App);

