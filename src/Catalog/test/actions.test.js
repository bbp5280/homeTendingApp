import * as actions from '../actions';

describe('Invoice Action', () => {

  it(' Invoice hould take an object and return an action', () => {
    const invoice =
      {houseID: '1',
        houseAddress: '123 street',
        homeOwner: 'Jane Doe',
        homeFriendlyName: 'Ragnar Rock',
        descriptionOfWork: 'Did Some Work',
        runningTotal:[{lineitem:'wood',
          amount:'12'}],
        date: '11/11/11'};
    const expected = {
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

    expect(actions.addInvoices(invoice)).toEqual(expected);
  });
});
