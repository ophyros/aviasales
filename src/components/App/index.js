import React, { Component } from 'react';
import { connect } from 'react-redux';

import Filter from '../Filter';
import TicketsList from '../TicketsList';

import './index.css';

class App extends Component {
  render() {
    console.log(this.props);
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
            <TicketsList tickets={this.props.tickets} />
          </div>
        </section>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    status: state.status,
    tickets: state.tickets,
    filters: state.filters,
    currency: state.currency
  }
}

export default connect(mapStateToProps)(App);

