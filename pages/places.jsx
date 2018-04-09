import React from 'react';
import { Page, Table } from 'prototype-kit';

class Home extends Page {

  content() {
    const columns = {
      site: 'Site',
      building: 'Building',
      name: 'Name'
    };

    return <div>

      <h2>University of Croydon</h2>
      <h1>Schedule of Premises</h1>

      <Table dataset={ this.props.data.places } columns={ columns } />
    </div>
  }

}

export default Home;
