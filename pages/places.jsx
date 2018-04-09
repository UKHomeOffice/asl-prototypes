import React from 'react';
import { Page, Table } from 'prototype-kit';

class Places extends Page {

  content() {
    // set the column headings
    const columns = {
      site: 'Site',
      building: 'Building',
      name: 'Name'
    };

    return <div>

      <h2>University of Croydon</h2>
      <h1>Schedule of Premises</h1>

      // render a table of the "places" data from ./data folder
      <Table dataset={ this.props.data.places } columns={ columns } />
    </div>
  }

}

export default Places;
