import React, { Component } from 'react';

import { plural } from '../../utils';

import moment from 'moment';
import 'moment/locale/ru';

import './index.css';

const currencySigns = {
  'RUB': '₽',
  'USD': '$',
  'EUR': '€'
}

class Ticket extends Component {
  render() {
    const { ticket } = this.props;

    const { baseCurrency, currentCurrency, rates} = this.props.currencies;

    const priceRate = baseCurrency === currentCurrency ? 1 : rates[currentCurrency];
    const priceString = Math.floor(ticket.price * priceRate) + currencySigns[currentCurrency];

    return (
      <div className='ticket'>
        <div className='ticket__left'>
          <div className='ticket__carrier'>
            {ticket.carrier}
          </div>
          <button className='ticket__buy'>
            Купить<br />
            за {priceString}
          </button>
        </div>
        <div className='ticket__right'>
          <div className='ticket__origin'>
            <div className='ticket__time'>
              {ticket.departure_time}
            </div>
            <div className='ticket__name'>
              {ticket.origin + ', ' + ticket.origin_name}
            </div>
            <div className='ticket__date'>
              {moment(ticket.departure_date, 'DD.MM.YY').format('D MMM YYYY, dd')}
            </div>
          </div>
          <div className='ticket__stops'>
            {ticket.stops === 0 ? 'Без пересадок' : ticket.stops + ' ' + plural(ticket.stops, ['пересадка', 'пересадки', 'пересадок'])}
          </div>
          <div className='ticket__destination'>
            <div className='ticket__time'>
              {ticket.arrival_time}
            </div>
            <div className='ticket__name'>
              {ticket.destination + ', ' + ticket.destination_name}
            </div>
            <div className='ticket__date'>
              {moment(ticket.arrival_date, 'DD.MM.YY').format('D MMM YYYY, dd')}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Ticket;
