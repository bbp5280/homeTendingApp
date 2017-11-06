import { shallow, configure } from 'enzyme';
import  CreateInvoice from '../index';
import React from 'react';
import  Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

describe('CardCatalog snapshot', () => {

  it('should always match the snapshot', () => {
    const mkFun = jest.fn();
    const wrapper = shallow(<CreateInvoice
      home={{houseid: 1,
        message:'Message'}}
      submitInvoice={mkFun}
      close={mkFun}/>);

    expect(wrapper).toMatchSnapshot();

  });
});
