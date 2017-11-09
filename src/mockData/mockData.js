export const homes = [{
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
  discription:`Middle section of a triplex. Heating system and water heater are old
  with known issues. Owner waiting to replace until 2018.`
},
{
  id: 2,
  ownerFirst: 'John',
  ownerLast:'Doe',
  street: '401 W. Lamme',
  city: 'Bozeman',
  stateShort: 'MT',
  stateLong:'Montana',
  zip:59715,
  invoices:[],
  messages:[],
  friendlyName:'House of Stumps',
  bedrooms:4,
  bathrooms:2,
  discription:`90 + year old house. Owner refuses to remove the stumps all over the
  property because it "gives charicter." Guest sometimes trip on them while coming
  home after parting downtown.`
},
{
  id: 3,
  ownerFirst: 'Dexter',
  ownerLast:'Morgan',
  street: '4 Counchas Loop',
  city: 'Santa Fe',
  stateShort: 'NM',
  stateLong:'New Mexico',
  zip: 87501,
  invoices:[],
  messages:[],
  friendlyName:'Adobe House',
  bedrooms:4,
  bathrooms:3,
  discription:`20 year old adobe with new kitchen and hvac system. The home is
  15 miles ouside of town with great views. Do not bring the dog unless you
  want to clean up dead quails after the dog gets in the bushes.`
},
{
  id: 4,
  ownerFirst: 'The Dread Pirate',
  ownerLast:'Roberts',
  street: '44 Glenn Dr',
  city: 'Fairfax',
  stateShort: 'CA',
  stateLong: 'California',
  zip:94930,
  invoices:[],
  messages:[],
  friendlyName:'House on the Hill',
  bedrooms:3,
  bathrooms:2,
  discription:`Beautiful home with great views of the valley. New master bathroom and a large deck with
  lots of plants that need watered at least twice a week more when it is hot. In serious danger from
  fire if the sonoma fires were to happen in marin county.`
}];

export const messages = [{
  id: 1,
  houseID:1,
  message: {
    owner: 'Jane Doe',
    friendlyName: 'Skelitor House',
    address: '4183 W. Walsh Pl. Denver, CO 80128',
    houseID: 1,
    title:'Stock firewood for arrival',
    body:`We will be in on the 21st please have 12 cords of firewood ready for
    our 3 night stay.`
  }
},
{
  id: 2,
  houseID: 1,
  message: {
    owner: 'Jane Doe',
    friendlyName: 'Skelitor House',
    address: '4183 W. Walsh Pl. Denver, CO 80128',
    houseID: 1,
    title:'Have fireplace cleaned',
    body:`Clearly we we burn a ton of wood.
    Please have the fireplace cleaned before our arrival.`
  }
},
{
  id: 3,
  houseID: 3,
  message: {
    owner: 'Dexter Morgan',
    friendlyName: 'Adobe House',
    address: '4 Counchas Loop Santa Fe, NM 59715',
    houseID: 3,
    title:'Blow out sprinklers',
    body:`We just saw it was snowing for the next 10 days. I know you reached out to us about this and we didn't respond, but
    can you blow out the sprinklers so the pipes don't freeze.`
  }
},
{
  id: 4,
  houseID: 2,
  message: {
    owner: 'John Doe',
    friendlyName: 'House of Stumps',
    address: '401 W. Lamme Bozeman, MT 80128',
    houseID: 2,
    title:'Turn on the furnace',
    body:`Please have our furnace turned on.`
  }
},
{
  id: 5,
  houseID: 4,
  message: {
    owner: 'The Dread Pirate Roberts',
    friendlyName:'House on the Hill',
    address: '44 Glenn Dr. Fairfax, CA 94930',
    houseID: 4,
    title:'Stock fridge for arrival',
    body:`We will be arriving on the 10th of December and we would like you to stock the fridge with
    vodka and bourbon. We could also use some saltine crackers`
  }
}];

export const invoices = [{houseID: '1',
  houseAddress: '123 street',
  homeOwner: 'Jane Doe',
  homeFriendlyName: 'Ragnar Rock',
  descriptionOfWork: 'stocked',
  runningTotal:[{lineitem:'wood',
    amount:'12'}, {
    lineitem: 'tripCharge',
    amount: '900'
  }],
  date: '11/11/11'},
{
  houseID: '2',
  houseAddress: '678 something',
  homeOwner: 'John Doe',
  homeFriendlyName: 'Sugaree',
  descriptionOfWork: 'Get food',
  runningTotal:[{lineitem:'Food',
    amount:'23'}, {
    lineitem: 'tripCharge',
    amount: '900'
  }],
  date: '12/12/12'}];
