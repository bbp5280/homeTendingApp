import { shallow, configure } from 'enzyme';
import  Weather from '../index';
import React from 'react';
import  Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

describe('CardCatalog snapshot', () => {

  it('should always match the snapshot', () => {
    const mkFun = jest.fn();
    const wrapper = shallow(<Weather
      message={[{houseid: 1,
        message:'Message'}]}
      close={mkFun}/>);

    expect(wrapper).toMatchSnapshot();

  });
});
