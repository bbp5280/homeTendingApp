export const invoices = (state = [], action) => {
  switch (action.type) {
  case 'ADD_INVOICES':
    console.log('here');
    return action.invoice;
  default:
    return state;
  }
};
