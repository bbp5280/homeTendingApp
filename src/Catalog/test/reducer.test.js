import * as reducers from '../reducers';

describe('Houses Reducer', () => {
  it('invoices should set default state', () => {
    const expectation = [];

    expect(reducers.invoices(undefined, {})).toEqual(expectation);
  });

  it('GOTHouses should add houses to state', () => {
    const action = {
      type: 'ADD_INVOICES',
      invoice:
        {houseID: '1',
          houseAddress: '123 street',
          homeOwner: 'Jane Doe',
          homeFriendlyName: 'Ragnar Rock',
          descriptionOfWork: 'Did Some Work',
          runningTotal:[{lineitem:'wood',
            amount:'12'}],
          date: '11/11/11'}
    };
    const expectation = [
      {houseID: '1',
        houseAddress: '123 street',
        homeOwner: 'Jane Doe',
        homeFriendlyName: 'Ragnar Rock',
        descriptionOfWork: 'Did Some Work',
        runningTotal:[{lineitem:'wood',
          amount:'12'}],
        date: '11/11/11'}
    ];

    expect(reducers.invoices(undefined, action)).toEqual(expectation);
  });
});
