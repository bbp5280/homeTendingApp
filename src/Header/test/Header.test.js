import { shallow, configure } from 'enzyme';
import  Header from '../index';
import React from 'react';
import  Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

describe('CardCatalog snapshot', () => {

  it('should always match the snapshot', () => {
    const wrapper = shallow(<Header/>);

    expect(wrapper).toMatchSnapshot();

  });
});
