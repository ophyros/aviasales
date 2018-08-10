import React, { Component } from 'react';

import Ticket from '../Ticket';

import data from '../../data/tickets.json';

class TicketsList extends Component {
  render() {
    const { tickets } = data;
    const list = tickets
                    .sort( (prev, next) => prev.price > next.price )
                    .map( (ticket, i) => (
                        <li className='tickets-list__item' key={i}>
                          <Ticket ticket={ticket} />
                        </li>
                      )
                    );

    return (
      <ul className='tickets-list'>
        {list}
      </ul>
    );
  }
}

export default TicketsList;
