import React, { Component } from 'react';

import Currency from '../Currency';

class CurrenciesList extends Component {
  render() {
    const { setCurrentCurrency } = this.props;
    const { currentCurrency, availableCurrencies } = this.props.currencies;

    const items = availableCurrencies.map( currency => {
      return (
        <li className='currencies-list__item' key={currency}>
          <Currency
            label={currency}
            value={currency}
            checked={currency === currentCurrency}
            onChange={setCurrentCurrency}
          />
        </li>
      )
    })
    return (
      <ul className='currencies-list'>
        {items}
      </ul>
    );
  }
}

export default CurrenciesList;
