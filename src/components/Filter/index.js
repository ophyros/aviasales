import React, { Component } from 'react';
import { connect } from 'react-redux';

import CurrenciesList from '../CurrenciesList';
import CheckboxesList from '../CheckboxesList';

import {
  addStopsToFilter,
  removeStopsFromFilter,
  setOneStopToFilter,
  resetStopsFilter,
  buildAvailableOptions
} from '../../actions/stopsFilterActions';

import {
  fetchCurrenciesFromAPI,
  setCurrentCurrency
} from '../../actions/currenciesActions';

class Filter extends Component {

  componentDidMount = () => {
    this.props.buildStopsFilter();
    this.props.fetchCurrenciesFromAPI();
  }

  render() {
    const {
      stopsFilter,
      addStopsToFilter,
      removeStopsFromFilter,
      setOneStopToFilter,
      resetStopsFilter,
      currencies,
      setCurrentCurrency
    } = this.props;

    return (
      <div className='filter'>
        <section className='filter__section'>
          <header className='filter__header'>
            Валюта
          </header>
          <div className='filter__controls'>
            <CurrenciesList
              currencies={currencies}
              setCurrentCurrency={setCurrentCurrency}
            />
          </div>
        </section>
        <section className='filter__section'>
          <header className='filter__header'>
            Количество пересадок
          </header>
          <div className='filter__controls'>
            <CheckboxesList
              availableOptions={stopsFilter.availableOptions}
              selectedOptions={stopsFilter.selectedOptions}
              addStopsToFilter={addStopsToFilter}
              removeStopsFromFilter={removeStopsFromFilter}
              resetStopsFilter={resetStopsFilter}
              setOneStopToFilter={setOneStopToFilter}
            />
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stopsFilter: state.stopsFilter,
  currencies: state.currencies
});

const mapDispatchToProps = dispatch => ({
  addStopsToFilter: num => {
    dispatch(addStopsToFilter(num));
  },
  removeStopsFromFilter: num => {
    dispatch(removeStopsFromFilter(num));
  },
  setOneStopToFilter: num => {
    dispatch(setOneStopToFilter(num));
  },
  resetStopsFilter: () => {
    dispatch(resetStopsFilter());
  },
  buildStopsFilter: () => {
    dispatch(buildAvailableOptions());
  },
  fetchCurrenciesFromAPI: () => {
    dispatch(fetchCurrenciesFromAPI());
  },
  setCurrentCurrency: (currency) => {
    dispatch(setCurrentCurrency(currency));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
