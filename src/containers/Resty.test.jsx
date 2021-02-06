global.fetch = require('node-fetch');
import React from 'react';
import { render, cleanup, screen, waitFor } from '@testing-library/react';
import Resty from './Resty';
import user from '@testing-library/user-event';
jest.mock('../services/fetchApi.js');


describe('Resty', () => {
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
  // it.only('RENDERS RUSTY CONTAINOR', () => {
  //   render(<Resty   />);
  //   const urlInput = screen.getByPlaceholderText('URL');
  //   const getInput = screen.getByLabelText('GET');
  //   const submitButton = screen.getByText("Raw JSON Body" );
  //   user.type(urlInput, 'hhtp://jsonplaceholder.typicode.com/todos/1');
  //   user.click(submitButton);
  //   user.click(getInput);
  //   return waitFor(() => {
  //     expect(screen.getByTestId('display')).not.toBeEmptyDOMElement();
  //   });

  
  
  // });
});


