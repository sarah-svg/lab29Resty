import React from 'react';
import { shallow } from 'enzyme';
import Resty from './Resty';

jest.mock('../services/fetchApi.js');

describe('Resty container', () => {
  let wrapper;
  let Resty;
  beforeEach(() => {
    wrapper = shallow(<Resty />);
    Resty = wrapper.instance();
  });

  it('can change url in state', () => {
    Resty.handleChange({
      target: {
        name: 'url',
        value: 'www.spacejam.com'
      }
    });

    expect(wrapper.state('url')).toEqual('www.spacejam.com');
  });

  it('can change method in state', () => {
    Resty.handleChange({
      target: {
        name: 'method',
        value: 'GETEM'
      }
    });

    expect(wrapper.state('method')).toEqual('GETEM');
  });

  it('can change body in state', () => {
    Resty.handleChange({
      target: {
        name: 'body',
        value: 'i am a good body'
      }
    });

    expect(wrapper.state('body')).toEqual('i am a good body');
  });

  it('can update history and display on fetch', () => {

    return Resty.fetch()
      .then(() => {
        expect(wrapper.state('display')).toEqual([
          { text: 'i am a response' },
          { text: 'i too can respond' }
        ]);
      });
  });
});
