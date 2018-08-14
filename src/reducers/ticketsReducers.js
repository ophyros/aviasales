import data from '../data/tickets.json';

const tickets = (state = [], action) => {
  switch (action.type) {
    default:
      return data.tickets;
  }
}

export default tickets;
