import React from 'react';
import { Page, Form, Table } from 'prototype-kit';
import { some } from 'lodash';

import BigNumber from './components/big-number';
import SearchBox from './components/search';

class Home extends Page {

  cell(key, value, row) {
    switch (key) {
      case 'name':
        return <a href={`/establishment?id=${row.id}`}>{ row.name }</a>;
      default:
        return value;
    }
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
    const all = this.props.data.establishments;
    return <React.Fragment>
      <div className="grid-row">
        <div className="column-one-quarter">
          <BigNumber number={ all.length } label="Establishments" />
        </div>
        <div className="column-one-quarter">
          <BigNumber number="17231" label={<a href="/personal-licences">Personal licences</a>} />
        </div>
        <div className="column-one-quarter">
          <BigNumber number="3209" label={<a href="/projects">Projects</a>} />
        </div>
        <div className="column-one-quarter">
          <aside>
            <SearchBox
              label="Search establishments"
              hint="By name or licence number"
              onChange={searchTerm => this.setState({ searchTerm })}
              />
          </aside>
        </div>
      </div>
      <h2>{ filtered.length === all.length ? 'All establishments' : `${filtered.length} of ${all.length} establishments` }</h2>
      <Table
        dataset={ filtered }
        columns={ { name: 'Name', licenceNumber: 'Licence number' } }
        formatter={ (key, value, row) => this.cell(key, value, row) }
        sort="name"
        />
    </React.Fragment>
  }

}

export default Home;
