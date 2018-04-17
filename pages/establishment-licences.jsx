import React from 'react';
import { Page, Form, Table } from 'prototype-kit';
import { some } from 'lodash';

import SearchBox from './components/search';

class Home extends Page {

  breadcrumb() {
    return [
      { label: 'Home', href: '/dashboard' },
      'Establishments'
    ];
  }

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
      <header>
        <h2>&nbsp;</h2>
        <h1>Establishments</h1>
      </header>
      <div className="grid-row">
        <div className="column-two-thirds">
          <SearchBox
            label="Search by name or licence number"
            onChange={searchTerm => this.setState({ searchTerm })}
            />
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
