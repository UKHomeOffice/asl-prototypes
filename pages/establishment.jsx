import React from 'react';
import { Page } from 'prototype-kit';

class Establishment extends Page {

  establishment() {
    return this.props.data.establishments.find(row => row.id === this.props.query.id);
  }

  breadcrumb() {
    return [
      { label: 'Home', href: '/home' },
      this.establishment().name
    ];
  }

  content() {
    // get the establishment with the id specified in the query string
    const establishment = this.establishment();

    return <React.Fragment>
      <h1>{ establishment.name }</h1>
      <div className="grid-row">
        <div className="column-two-thirds">
          <ul>
            <li><a href={`/details?id=${establishment.id}`}>Establishment details</a></li>
            <li><a href={`/named-people?id=${establishment.id}`}>Named people and licence holders</a></li>
            <li><a href={`/premises?id=${establishment.id}`}>Schedule of premises</a></li>
          </ul>
        </div>
        <div className="column-one-third">
          <aside>
            <dl>
              <dt>Establishment licence number</dt>
              <dd>{ establishment.licenceNumber }</dd>

              <dt>Licence holder</dt>
              <dd><a href="/profile">{ establishment.elh }</a></dd>

              <dt>Home Office liaison contact (HOLC)</dt>
              <dd><a href="/profile">{ establishment.holc }</a></dd>
            </dl>
          </aside>
        </div>
      </div>
    </React.Fragment>
  }

}

export default Establishment;
