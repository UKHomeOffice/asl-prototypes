import React from 'react';
import { Page } from 'prototype-kit';

class Establishment extends Page {

  content() {
    // get the establishment with the id specified in the query string
    const establishment = this.props.data.establishments.find(row => row.id === this.props.query.id);
    return <React.Fragment>
      <h1>{ establishment.name }</h1>
      <h2>Establishment details</h2>

      <dl>
        <dt>Establishment licence number</dt>
        <dd>{ establishment.licenceNumber }</dd>

        <dt>Last update</dt>
        <dd>25 March 2018 17:00 GMT</dd>

        <dt>Address</dt>
        <dd>{ establishment.address }</dd>

        <dt>Licence holder</dt>
        <dd><a href="/profile">{ establishment.elh }</a></dd>

        <dt>Home Office liaison contact (HOLC)</dt>
        <dd><a href="/profile">{ establishment.holc }</a></dd>

        <dt>Licensed to carry out</dt>
        <dd>
          <ul>
            <li>Regulated procedures on protected animals</li>
            <li>Breeding of relevant protected animals</li>
            <li>Supply of relevant protected animals</li>
          </ul>
        </dd>

      </dl>

    </React.Fragment>
  }

}

export default Establishment;
