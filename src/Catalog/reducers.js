export const invoices = (state = [], action) => {
  switch (action.type) {
  case 'ADD_INVOICES':
    return [...state, action.invoice];
  default:
    return state;
  }
};
