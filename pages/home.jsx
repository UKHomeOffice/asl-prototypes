import React from 'react';
import { Page, Form, Table } from 'prototype-kit';
import { some } from 'lodash';

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

  greet() {
    return (new Date()).getHours() < 12 ? 'Good morning Ben' : 'Good afternoon Ben';
  }

  search() {
    if (!this.state || !this.state.searchTerm) {
      return this.props.data.establishments;
    }
    const term = this.state.searchTerm;
    return this.props.data.establishments.filter(row => {
      return some(['name', 'licenceNumber'], key => row[key].toLowerCase().includes(term.toLowerCase()));
    });
  }

  content() {
    const filtered = this.search();
    return <React.Fragment>
      <h1>{ this.greet() }</h1>
      <div className="grid-row">
        <div className="column-one-quarter">
          <BigNumber number={ this.props.data.establishments.length } label="Establishments" />
        </div>
        <div className="column-one-quarter">
          <BigNumber number="17000" label={<a href="/personal-licences">Personal licences</a>} />
        </div>
        <div className="column-one-quarter">
          <BigNumber number="500" label={<a href="/projects">Projects</a>} />
        </div>
        <div className="column-one-quarter">
          <aside>
            <Form.Input
              className="form-control-3-4"
              label="Search establishments"
              hint="By establishment name or licence number"
              onChange={e => this.setState({ searchTerm: e.target.value})}
              />
          </aside>
        </div>
      </div>
      <Table
        dataset={ filtered }
        columns={ { name: 'Establishment name', licenceNumber: 'Licence number' } }
        formatter={ (key, value, row) => this.cell(key, value, row) }
        sort="name"
        />
    </React.Fragment>
  }

}

export default Home;
