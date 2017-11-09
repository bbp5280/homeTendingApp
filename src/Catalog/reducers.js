export const invoices = (state = [], action) => {
  switch (action.type) {
  case 'ADD_INVOICES':
    return [...action.invoice];
  default:
    return state;
  }
};
