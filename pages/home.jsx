import React from 'react';
import { Page, Form, Table } from 'prototype-kit';

import BigNumber from './components/big-number';

class Home extends Page {

  cell(key, value, row) {
    switch (key) {
      case 'name':
        return <a href={`/establishment?id=${row.id}`}>{ row.name }</a>;
      default:
        return value;
    }
  }

  content() {
    return <React.Fragment>
      <h1>Good morning Ben</h1>
      <div className="grid-row">
        <div className="column-one-quarter">
          <BigNumber number={ this.props.data.establishments.length } label="Establishments" />
        </div>
        <div className="column-one-quarter">
          <BigNumber number="17000" label="Personal licences" />
        </div>
        <div className="column-one-quarter">
          <BigNumber number="500" label="Projects" />
        </div>
        <div className="column-one-quarter">
          <aside>
            <Form.Input
              label="Search establishments"
              hint="By establishment name or licence number"
              />
          </aside>
        </div>
      </div>
      <Table
        dataset={ this.props.data.establishments }
        columns={ { name: 'Establishment name', licenceNumber: 'Licence number' } }
        formatter={ (key, value, row) => this.cell(key, value, row) }
        sort="name"
        />
    </React.Fragment>
  }

}

export default Home;
