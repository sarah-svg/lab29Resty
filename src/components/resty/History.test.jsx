import React from 'react';
import { render, cleanup } from '@testing-library/react';
import History from './History';

describe('displays history of queries', () => {
  afterEach(() => cleanup());
  it('renders data from query history', () => {
    const { asFragment } = render(<History url="" method="" id="" 
      onSubmit="" onChange=""  />);
    expect(asFragment()).toMatchSnapshot();
  });
});
