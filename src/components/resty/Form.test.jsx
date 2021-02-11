import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Form from './Form';

describe('displays radio buttons with methods', () => {
  afterEach(() => cleanup());
  it('renders data from api with radio buttons', () => {
    const { asFragment } = render(<Form url="" method="" body="" 
      onSubmit="" onChange=""  />);
    expect(asFragment()).toMatchSnapshot();
  });
});
