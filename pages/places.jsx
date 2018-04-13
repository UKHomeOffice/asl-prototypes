import React from 'react';
import { Page, Table } from 'prototype-kit';

class Places extends Page {


  establishment() {
    return this.props.data.establishments.find(row => row.id === this.props.query.id);
  }

  breadcrumb() {
    return [
      { label: 'Home', href: '/home' },
      { label: this.establishment().name, href: `/establishment?id=${this.props.query.id}` },
      'Schedule of premises'
    ];
  }

  content() {
    // set the column headings
    const columns = {
      site: 'Site',
      building: 'Building',
      name: 'Name'
    };
    const establishment = this.establishment();

    return <React.Fragment>

      <h1>{ establishment.name }</h1>
      <h2>Schedule of Premises</h2>

      <Table dataset={ this.props.data.places } columns={ columns } />
    </React.Fragment>
  }

}

export default Places;
