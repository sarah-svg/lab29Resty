import React, { Component } from 'react';
import Head from '../components/resty/Head';
import HistoryList from '../components/resty/ListHistory';
import Form from '../components/resty/Form';
import Display from '../components/resty/Display';
export default class Resty extends Component {
  state = {

  }
  render() {
    return (
      <div>
        <Head />
        <HistoryList />
        <span>
          <Form />
          <Display />
        </span>      
      </div>
    );
  }
}


