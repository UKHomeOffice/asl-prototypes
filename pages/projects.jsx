import React from 'react';
import Page from './components/page';
import { Table } from 'prototype-kit';

class Places extends Page {

  establishment() {
    return this.props.data.establishments.find(row => row.id === this.props.query.id);
  }

  breadcrumb() {
    return [
      { label: 'Home', href: '/dashboard' },
      { label: 'Establishments', href: '/establishment-licences' },
      { label: this.establishment().name, href: `/establishment?id=${this.props.query.id}` },
      'Projects'
    ];
  }

  content() {
    // set the column headings
    const columns = {
      firstname: 'First Name',
      surname: 'Surname',
      role: "Role"
    };
    const establishment = this.establishment();

    return <React.Fragment>
      <header>
        <h2>{ establishment.name }</h2>
        <h1>Project Licences</h1>
      </header>

      <Table dataset={ this.props.data.people } columns={ columns } />

    </React.Fragment>
  }

}

export default Places;
