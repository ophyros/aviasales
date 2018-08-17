import React, { Component } from 'react';

import Ticket from '../Ticket';
import Loader from '../Loader';

import './index.css';

class TicketsList extends Component {

  filterTickets = (ticket) => {
    const { stopsFilter } = this.props;
    if (stopsFilter.length) {
      return stopsFilter.indexOf(ticket.stops) > -1;
    }
    return true;
  }

  buildTicketsList = () => {
    const { currencies } = this.props;
    const { tickets } = this.props.tickets;
    if (tickets.length) {
      return tickets
              .filter( this.filterTickets )
              .sort( (prev, next) => prev.price > next.price )
              .map( (ticket, i) => (
                  <li className='tickets-list__item' key={i}>
                    <Ticket ticket={ticket} currencies={currencies} />
                  </li>
                )
              );
    }
    return (
        <li className='tickets-list__item'>
          <div className='tickets-list__notfound'>
            <p>Ничего не найдено</p>
          </div>
        </li>
      );
  }

  render() {
    const { isFetching, error } = this.props.tickets;

    return (
      <ul className='tickets-list'>
        {isFetching ?
          <li className='tickets-list__item'>
            <div className='tickets-list__loader'>
              <Loader />
            </div>
          </li>
          : error !== '' ?
            <li className='tickets-list__item'>
              <div className='tickets-list__error'>
                <p>¯\_(ツ)_/¯ Что-то пошло не так</p>
              </div>
            </li>
            :
              this.buildTicketsList()
        }
      </ul>
    );
  }
}

export default TicketsList;
