import React, { Fragment } from 'react';
import { Page } from 'prototype-kit';
import { TabBar } from 'govuk-react-components/components/tabbar';
import { TabItem } from 'govuk-react-components/components/tabbar/tabitem';


const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const tabs = [
  'All',
  'NACWO',
  'NIO',
  'NVS',
  'NTCO',
  'NPRC',
  'PELH',
  'PIL',
  'HOLC',
  'PPL'
];

class NamedPeople extends Page {
  establishment() {
    return this.props.data.establishments.find(row => row.id === this.props.query.id);
  }

  breadcrumb() {
    return [
      { label: 'Home', href: '/home' },
      { label: this.establishment().name, href: `/establishment?id=${this.props.query.id}` },
      'Named people and personal licence holders'
    ]
  }

  onLetterClick(e) {
    e.preventDefault();
  }

  getPeople() {
    const people = this.props.data.people;
    return people || [];
  }

  content() {
    const establishment = this.establishment();
    return (
      <Fragment>
        <header>
          <h2>{ establishment.name }</h2>
          <h1>Named people and licence holders</h1>
        </header>
        <ul class="list">
          <li style={{ display: 'inline-block', marginRight: '0.5em' }}><a href="#" onClick={this.onLetterClick}>ALL</a></li>
          {
            letters.map(letter =>
              <li style={{ display: 'inline-block', marginRight: '0.5em' }}><a href="#" onClick={this.onLetterClick}>{letter}</a></li>
            )
          }
        </ul>
        <TabBar>
          {
            tabs.map((tab, index) =>
              <TabItem href={`#${tab.toLowerCase()}`} active={index === 2}>{tab}</TabItem>
            )
          }
        </TabBar>
        <TabBar vertical={true}>
          {
            this.getPeople().map((person, index) => (
              <TabItem href={`#${person.id}`} active={index === 2}>
                <div className='person'>
                  {person.first_name} {person.last_name}
                  <br />
                  {person.role.toUpperCase()}
                </div>
              </TabItem>
            ))
          }
        </TabBar>
      </Fragment>
    )
  }
}

export default NamedPeople;
