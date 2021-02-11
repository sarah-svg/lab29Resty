import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Display from './Display';

describe('displays data from api', () => {
  afterEach(() => cleanup());
  it('renders data from api', () => {
    const { asFragment } = render(<Display display={[]} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
