import React from 'react';
import { render, cleanup } from '@testing-library/react';
import HistoryItem from './ItemHistory';

describe('Iten History', () => {
  afterEach(() => cleanup());
  it('renders HistoryItem', () => {
    const { asFragment } = render(<HistoryItem
      method="GET"
      url="www.google.com"
      id= "1"
    />);    
        
    expect(asFragment()).toMatchSnapshot();
  });
});
  

