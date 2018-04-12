import React from 'react';
import { Page } from 'prototype-kit';

import Accordion from './components/accordion';
import ExpandingPanel from './components/expanding-panel';

class Establishment extends Page {

  content() {
    // get the establishment with the id specified in the query string
    const establishment = this.props.data.establishments.find(row => row.id === this.props.query.id);
    return <React.Fragment>
      <div className="grid-row">
        <div className="column-two-thirds">
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

          <Accordion>
            <ExpandingPanel title="Conditions">
              <p>Lorem ipsum dolor</p>
            </ExpandingPanel>
            <ExpandingPanel title="Authorisations">
              <p>Lorem ipsum dolor</p>
            </ExpandingPanel>
            <ExpandingPanel title="Related contacts">
              <p>Lorem ipsum dolor</p>
            </ExpandingPanel>
          </Accordion>
        </div>
      </div>
    </React.Fragment>
  }

}

export default Establishment;
