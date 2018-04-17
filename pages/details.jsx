import React from 'react';
import { Page } from 'prototype-kit';

import Accordion from './components/accordion';
import ExpandingPanel from './components/expanding-panel';

class Details extends Page {

  establishment() {
    return this.props.data.establishments.find(row => row.id === this.props.query.id);
  }

  breadcrumb() {
    return [
      { label: 'Home', href: '/dashboard' },
      { label: 'Establishment licences', href: '/establishment-licences' },
      { label: this.establishment().name, href: `/establishment?id=${this.props.query.id}` },
      'Establishment details'
    ];
  }

  content() {
    const establishment = this.establishment();

    return <React.Fragment>
      <header>
        <h2>{ establishment.name }</h2>
        <h1>Establishment details</h1>
      </header>
      <div className="grid-row">
        <div className="column-two-thirds">

          <dl>
            <dt>Licence number</dt>
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
              <p>In addition to the <a href="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/193124/Project_Licence_-_Standard_Conditions.pdf">standard conditions of Section 2C licences</a>, this establishment will also:</p>
              <p>Ensure that Natalie Page and Terrance Lang attend an accredited NACWO training course within the next 6 months. They are forbidden to work with LA until proof of this training has been provided to ASRU.</p>
            </ExpandingPanel>
            <ExpandingPanel title="Authorisations">
              <h2>Methods of killing not mentioned in Schedule 1</h2>
              <h3>Method</h3>
              <p>Use of concussion with captive bolt for LA</p>
              <h3>Applicable animals</h3>
              <p>All infant large animals under 6 months. This may apply to calves, lambs, and piglets. This method has been proven to be the most humane way of killing infant livestock.</p>

              <h2>Setting free and re-homing of protected animals</h2>
              <h3>Circumstances</h3>
              <p>{ establishment.name } is currently undertaking major research into the levels of fertility in livestock. During the course of this research, some surplus stock may be produced. We have come to an agreement with 3 local sheep farmers to re-integrate these animals into the national flock.</p>
              <h3>Applicable animals</h3>
              <p>Only infant lambs between 3 and 6 months. Older animals and other species are not covered by this authorisation.</p>
            </ExpandingPanel>
            <ExpandingPanel title="Related contacts">
              <h2>Inspectors</h2>
              <p>Jon Hills</p>
              <dl>
                <dt>Email address</dt>
                <dd><a href="#">jon.hills@example.com</a></dd>

                <dt>Contact number</dt>
                <dd>01234 567890</dd>
              </dl>

              <h2>Single point of contact (SPoC)</h2>
              <p>Sean Jones</p>
              <dl>
                <dt>Email address</dt>
                <dd><a href="#">asru@example.com</a></dd>
              </dl>
            </ExpandingPanel>
          </Accordion>
        </div>
      </div>
    </React.Fragment>
  }

}

export default Details;
