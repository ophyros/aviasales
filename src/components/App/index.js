import React, { Component } from 'react';
import { connect } from 'react-redux';

import Filter from '../Filter';
import TicketsList from '../TicketsList';

import {
  fetchTicketsFromAPI
} from '../../actions/ticketsActions';

import './index.css';
import logo from './logo.svg';

class App extends Component {

  componentDidMount = () => {
    this.props.fetchTicketsFromAPI();
  }

  render() {
    const { tickets, stopsFilter, currencies } = this.props;
    return (
      <div className='app'>
        <header className='app__header'>
          <a className='app__logo' href="https://aviasales.ru">
            <img src={logo} alt='aviasales' />
          </a>
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

const mapStateToProps = state => ({
  tickets: state.tickets,
  stopsFilter: state.stopsFilter,
  currencies: state.currencies
});

const mapDispatchToProps = dispatch => ({
  fetchTicketsFromAPI: () => {
    dispatch(fetchTicketsFromAPI());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

