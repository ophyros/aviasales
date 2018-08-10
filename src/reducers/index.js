import data from '../data/tickets.json';

const initialState = {
  status: {
    isLoading: false,
    isError: false,
    error: ''
  },
  tickets: data.tickets,
  filters: [],
  currency: 'rub'
}

export default function rootReducer(state = initialState) {
  return state;
}