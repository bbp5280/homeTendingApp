import { shallow, configure } from 'enzyme';
import Card from './test/WeatherCard';
import React from 'react';
import  Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

describe('CardCatalog snapshot', () => {

  it.skip('should always match the snapshot', () => {
    const mkFun = jest.fn();
    const wrapper = shallow(<Card high='32'
      low='98'
      conditions='cloudy'
      icon={`http://www.nordzenterprises.com/hometending/wp-content/uploads/2015/08/cool-backgrounds9-e1440776175281.jpg`}
      close={mkFun}
      key='1'/>);

    expect(wrapper).toMatchSnapshot();

  });
});
