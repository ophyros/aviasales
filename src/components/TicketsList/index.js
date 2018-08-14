import React, { Component } from 'react';

import Ticket from '../Ticket';

class TicketsList extends Component {

  filterTickets = (ticket) => {
    const { stopsFilter } = this.props;
    if (stopsFilter.length) {
      return stopsFilter.indexOf(ticket.stops) > -1;
    }
    return true;
  }

  render() {
    const { tickets } = this.props;
    const list = tickets
                    .filter( this.filterTickets )
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
