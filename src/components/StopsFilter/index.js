import React, { Component } from 'react';
import { connect } from 'react-redux';

import Checkbox from '../Checkbox';

import { plural } from '../../utils';

import {
  addStopsToFilter,
  removeStopsFromFilter,
  setOneStopToFilter,
  resetStopsFilter,
  buildAvailableOptions
} from '../../actions/stopsFilterActions';

import './index.css';

class StopsFilter extends Component {

  componentDidMount = () => {
    this.props.buildStopsFilter();
  }

  buildList = () => {
    const { availableOptions,
            selectedOptions,
            addStopsToFilter,
            removeStopsFromFilter,
            setOneStopToFilter } = this.props;

    return availableOptions.map( option => {
      return (
        <li className='stopsfilter__item' key={option}>
          <Checkbox
            label={option === 0 ? 'Без пересадок' : option + ' ' + plural(option, ['пересадка', 'пересадки', 'пересадок'])}
            onlyBtn={true}
            value={option}
            onCheck={addStopsToFilter}
            onUnCheck={removeStopsFromFilter}
            onOnlyBtnClick={setOneStopToFilter}
            checked={selectedOptions.indexOf(option) > -1}
          />
        </li>
      )
    });
  }

  render = () => {
    const { selectedOptions,
            resetStopsFilter } = this.props;

    return (
      <ul className='stopsfilter'>
        <li className='stopsfilter__item'>
          <Checkbox
            label='Все'
            onlyBtn={false}
            onCheck={resetStopsFilter}
            onUnCheck={() => false}
            checked={!selectedOptions.length}
          />
        </li>
        {this.buildList()}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  availableOptions: state.stopsFilter.availableOptions,
  selectedOptions: state.stopsFilter.selectedOptions,
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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(StopsFilter);
