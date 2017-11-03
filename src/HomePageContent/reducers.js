export const homes = (state = [], action) => {
  switch (action.type) {
  case 'ADD_HOUSES':
    return [...action.houses];
  default:
    return state;
  }
};

export const messages = (state = [], action) => {
  switch (action.type) {
  case 'ADD_MESSAGES':
    return [...action.messages];
  default:
    return state;
  }
};

export const weather = (state = {}, action) => {
  switch (action.type) {
  case 'ADD_WEATHER':
    return action.weather;
  default:
    return state;
  }
};
