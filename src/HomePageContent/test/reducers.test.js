import * as reducers from '../reducers';

describe('Houses Reducer', () => {
  it('Houses reducer should set default state', () => {
    const expectation = [];

    expect(reducers.homes(undefined, {})).toEqual(expectation);
  });

  it('Houses reducer should add houses to state', () => {
    const action = {
      type: 'ADD_HOUSES',
      houses:[{
        id:1,
        ownerFirst: 'Jane',
        ownerLast:'Doe',
        street: '4183 W. Walsh Pl.',
        city: 'Denver',
        stateShort: 'CO',
        stateLong:'Colorado',
        zip:80128,
        invoices:[],
        messages:[],
        friendlyName:'Skelitor House',
        bedrooms:3,
        bathrooms:2,
        discription:`house stuff`
      }]};
    const expectation = [{
      id:1,
      ownerFirst: 'Jane',
      ownerLast:'Doe',
      street: '4183 W. Walsh Pl.',
      city: 'Denver',
      stateShort: 'CO',
      stateLong:'Colorado',
      zip:80128,
      invoices:[],
      messages:[],
      friendlyName:'Skelitor House',
      bedrooms:3,
      bathrooms:2,
      discription:`house stuff`
    }];

    expect(reducers.homes(undefined, action)).toEqual(expectation);
  });

  it('Messages reducer should set default state', () => {
    const expectation = [];

    expect(reducers.messages(undefined, {})).toEqual(expectation);
  });

  it('Houses reducer should add houses to state', () => {
    const action = {
      type: 'ADD_MESSAGES',
      messages:[{
        id: 1,
        houseID:1,
        message: {
          owner: 'Jane Doe',
          friendlyName: 'Skelitor House',
          address: '4183 W. Walsh Pl. Denver, CO 80128',
          houseID: 1,
          title:'Stock firewood for arrival',
          body:`messag stuff`
        }
      }]};
    const expectation = [{
      id: 1,
      houseID:1,
      message: {
        owner: 'Jane Doe',
        friendlyName: 'Skelitor House',
        address: '4183 W. Walsh Pl. Denver, CO 80128',
        houseID: 1,
        title:'Stock firewood for arrival',
        body:`messag stuff`
      }
    }];

    expect(reducers.messages(undefined, action)).toEqual(expectation);
  });
});
