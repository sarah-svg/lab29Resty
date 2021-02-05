import React from 'react';
import App from './App';

describe('App component', () => {
  it('renders App', () => {
    const wrapper = (<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
