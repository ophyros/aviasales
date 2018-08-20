import React, { Component } from 'react';
import { connect } from 'react-redux';

import Currency from '../Currency';

import {
  fetchCurrenciesFromAPI,
  setCurrentCurrency
} from '../../actions/currenciesActions';

import './index.css';

class CurrenciesList extends Component {

  componentDidMount = () => {
    this.props.fetchCurrenciesFromAPI();
  }

  buildList = () => {
    const { setCurrentCurrency, currentCurrency, availableCurrencies } = this.props;
    return availableCurrencies.map( currency => (
        <li className='currencies-list__item' key={currency}>
          <Currency
            label={currency}
            value={currency}
            checked={currency === currentCurrency}
            onChange={setCurrentCurrency}
          />
        </li>
      )
    );
  }

  render = () => (
    <ul className='currencies-list'>
      {this.buildList()}
    </ul>
  )
}

const mapStateToProps = state => ({
  currentCurrency: state.currencies.currentCurrency,
  availableCurrencies: state.currencies.availableCurrencies
});

const mapDispatchToProps = dispatch => ({
  fetchCurrenciesFromAPI: () => {
    dispatch(fetchCurrenciesFromAPI());
  },
  setCurrentCurrency: (currency) => {
    dispatch(setCurrentCurrency(currency));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrenciesList);
