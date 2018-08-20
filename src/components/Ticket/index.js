import React from 'react';

import { plural } from '../../utils';

import moment from 'moment';
import 'moment/locale/ru';

import './index.css';

const currencySigns = {
  'RUB': '₽',
  'USD': '$',
  'EUR': '€'
}

const Ticket = ({ baseCurrency, currentCurrency, rates, ticket }) => {

  const formatDate = (date) => moment(date, 'DD.MM.YY').format('D MMM YYYY, dd');

  const convertCurrency = (price) => {
    const priceRate = baseCurrency === currentCurrency ? 1 : rates[currentCurrency];
    const result = Math.floor(price * priceRate);
    return currentCurrency === 'RUB' ? result + currencySigns[currentCurrency] : currencySigns[currentCurrency] + result;
  }

  return (
    <div className='ticket'>
      <div className='ticket__left'>
        <div className='ticket__carrier'>
          <img src='/img/carrier.png' alt={ticket.carrier} />
        </div>
        <button className='ticket__buy'>
          Купить<br />
          за {convertCurrency(ticket.price)}
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
            {formatDate(ticket.departure_date)}
          </div>
        </div>
        <div className='ticket__stops'>
          {ticket.stops === 0 ? '' : ticket.stops + ' ' + plural(ticket.stops, ['пересадка', 'пересадки', 'пересадок'])}
        </div>
        <div className='ticket__destination'>
          <div className='ticket__time'>
            {ticket.arrival_time}
          </div>
          <div className='ticket__name'>
            {ticket.destination_name + ', ' + ticket.destination}
          </div>
          <div className='ticket__date'>
            {formatDate(ticket.arrival_date)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ticket;
