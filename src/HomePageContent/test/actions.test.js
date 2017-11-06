import * as actions from '../actions';

describe('Homepage Action', () => {

  it('addHouses should take an array and return an action', () => {
    const houses =
    [{
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
    const expected = {
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

    expect(actions.addHouses(houses)).toEqual(expected);
  });

  it('addMessages should take an array and return an action', () => {
    const messages =
    [{
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
    const expected = {
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

    expect(actions.addMessages(messages)).toEqual(expected);
  });
});
