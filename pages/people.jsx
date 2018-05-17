import React from 'react';
import Page from './components/page';
import { Form, Table } from 'prototype-kit';
import { some, uniq } from 'lodash';

import SearchBox from './components/search';

class Home extends Page {

  breadcrumb() {
    return [
      { label: 'Home', href: '/dashboard' },
      { label: 'Establishments', href: '/establishment-licences' },
      { label: this.establishment().name, href: `/establishment?id=${this.props.query.id}` },
      'People'
    ];
  }

  cell(key, value, row) {
    switch (key) {
      case 'name':
        return <a href={`/profile?id=${row.id}`}>{`${row.name}`}</a>;
      case 'role':
        return value.toUpperCase();
      default:
        return value;
    }
  }

  filters() {
    return uniq(this.props.data.people.map(row => row.role)).sort().concat(['PIL', 'PPL']);
  }

  search() {
    if (!this.state || !this.state.searchTerm && !this.state.filter) {
      return this.props.data.people;
    }
    const term = this.state.searchTerm || '';
    const filter = this.state.filter;

    const result = this.props.data.people.filter(row => {
      return !filter || row.role === filter || row.licence_type === filter;
    });

    return result.filter(row => {
      return some(['name', 'licence_number', 'licence_type'], key => {
        return row[key].toLowerCase().includes(term.toLowerCase())
      });
    });
  }

  establishment() {
    return this.props.data.establishments.find(row => row.id === this.props.query.id);
  }

  doFilter(e, filter) {
    e.preventDefault();
    this.setState({ filter });
  }

  content() {
    const establishment = this.establishment();
    const filtered = this.search();
    const all = this.props.data.people;
    return <React.Fragment>
      <header>
        <h2>{ establishment.name }</h2>
        <h1>People</h1>
      </header>
      <div className="grid-row">
        <div className="column-two-thirds">
          <SearchBox
            label="Search by name or licence number"
            onChange={searchTerm => this.setState({ searchTerm })}
            />
        </div>
      </div>
      <div className="filters">
        <span className="filter-by">Filter by:</span>
        <ul>
            {
              this.state && this.state.filter
                ? <li><a href="#" onClick={e => this.doFilter(e, '')}>All</a></li>
                : <li>All</li>
            }
          {
            this.filters().map(filter =>
              this.state && this.state.filter === filter
                ? <li>{ filter.toUpperCase() }</li>
                : <li><a href="#" onClick={(e) => this.doFilter(e, filter)}>{filter.toUpperCase()}</a></li>
            )
          }
        </ul>
      </div>
      <p style={{marginTop: '2em'}}>{ filtered.length === all.length ? `All ${all.length} people` : `Showing ${filtered.length} of ${all.length} people` }</p>
      <Table
        dataset={ filtered }
        columns={ { name: 'Name', role: 'Role', licence_type: 'Licence type', licence_number: 'Licence number' } }
        formatter={ (key, value, row) => this.cell(key, value, row) }
        sort="name"
        />
    </React.Fragment>
  }

}

export default Home;
