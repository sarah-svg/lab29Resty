global.fetch = require('node-fetch');
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import Resty from './Resty';
import { MemoryRouter } from 'react-router-dom';


describe('Resty container',  () => {
  it('', () => {
    render(<MemoryRouter><Resty /></MemoryRouter>);
    const urlInput = screen.getByPlaceholderText('Place URL here...');
    const getInput = screen.getByLabelText('GET');
    const submitButton = screen.getByText('Resty');
    user.type(urlInput, 'https://jsonplaceholder.typicode.com/todos/1');
    user.click(getInput);
    user.click(submitButton);

    return waitFor(() => {
      expect(screen.getByTestId('display')).not.toBeEmptyDOMElement();

    }); 
  });
  it('creates a snapshot test of the character containor', () => {
    const { asFragment } = render(<MemoryRouter>
      <Resty />
    </MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
  });

});
