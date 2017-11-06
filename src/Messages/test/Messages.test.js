import { shallow, configure } from 'enzyme';
import  Messages from '../index';
import React from 'react';
import  Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

describe('CardCatalog snapshot', () => {

  it('should always match the snapshot', () => {
    const mkFun = jest.fn();
    const wrapper = shallow(<Messages
      message={{houseid: 1,
        message:'Message'}}
      clickEvent={mkFun}
      key='1'/>);

    expect(wrapper).toMatchSnapshot();

  });
});
