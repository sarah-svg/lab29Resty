import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Resty from './Resty';




jest.mock('../services/fetchApi.js');


describe('Resty', () => {
  afterEach(() => cleanup());

  
  describe('Item History', () => {
    afterEach(() => cleanup());
    it('renders HistoryItem', () => {
      let name;
      let value;
      const { asFragment } = render(<Resty
        target= {
          name = 'url',
          value = 'www.spacejam.com'
        }
      />);    
          
      expect(asFragment()).toMatchSnapshot();
    });
  });


});
