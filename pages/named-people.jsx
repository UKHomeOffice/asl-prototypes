import React, { Fragment } from 'react';
import url from 'url';
import qs from 'qs';
import { some } from 'lodash';
import { Page } from 'prototype-kit';
import { TabBar } from 'govuk-react-components/components/tabbar';
import { TabItem } from 'govuk-react-components/components/tabbar/tabitem';

const appendToQueryString = data => {
  const u = url.parse(window.location.href);
  const search = qs.parse(u.query);
  Object.assign(search, data);
  u.search = qs.stringify(search);
  window.history.replaceState(undefined, undefined, u.format());
};

const roles = {
  nacwo: 'Named Animal Care and Welfare Officer',
  nio: 'Named Information Officer',
  nvs: 'Named Veterinary Surgeon',
  ntco: 'Named Training and Competency Officer',
  nprc: 'Named Person Responsible for Compliance',
  pel: 'Establishment Licence Holder',
  pil: 'Personal Licence Holder',
  holc: 'Home Office Liaison Contact',
  ppl: 'Project Licence Holder'
};

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const People = ({
  people,
  activePerson,
  onPersonClick,
  onClearFiltersClick
}) => {
  if (!people.length) {
    return <h3>No results found <a href="#" onClick={(e) => {
      e.preventDefault();
      onClearFiltersClick();
    }}>Clear Filters</a></h3>;
  }
  return (
    <TabBar vertical={true} className="people">
      {
        people.map((person, index) => (
          <TabItem
            key={index}
            className="person"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onPersonClick('person', person.id);
            }}
            active={activePerson && activePerson.id === person.id}
          >
            {person.first_name} {person.last_name}
            <br />
            {person.role.toUpperCase()}
          </TabItem>
        ))
      }
    </TabBar>
  )
};

const Person = ({
  person: {
    first_name,
    last_name,
    role,
    licence_number,
    address,
    town,
    postcode,
    telephone_number,
    email,
    qualifications,
    training_completed,
    facilities
  }
}) => {
  return (
    <Fragment>
      <div className="grid-row">
        <div className="column-two-thirds">
          <h1>{first_name} {last_name}</h1>
          <h2>{roles[role]} ({role.toUpperCase()})</h2>
        </div>
        <div className="column-one-third">
          <p>
            <a href="#" style={{ marginRight: '1em' }}>Print</a> <a href="#">Download</a>
          </p>
        </div>
      </div>
      <a href="#">Personal licence number: {licence_number}</a>
      <article>
        <dl>
          <dt>Professional Address</dt>
          <dd>{address}<br />{town}</dd>

          <dt>Postcode</dt>
          <dd>{postcode ? postcode : 'Not listed'}</dd>

          <dt>Telephone number</dt>
          <dd>{telephone_number ? telephone_number : 'Not listed'}</dd>

          <dt>Email address</dt>
          <dd>{email ? email : 'Not listed'}</dd>

          <dt>Qualifications</dt>
          <dd>{qualifications}</dd>

          <dt>Training completed</dt>
          <dd>{training_completed}</dd>

          <dt>Facilities (units or rooms) of establishment licence (or species) for which responsible</dt>
          <dd>{facilities}</dd>

        </dl>
      </article>
    </Fragment>
  )
};

class NamedPeople extends Page {
  componentDidMount() {
    this.setState({
      person: this.props.query.person,
      role: this.props.query.role,
      filter: this.props.query.filter
    });
    this.isLink = this.isLink.bind(this);
    this.updateState = this.updateState.bind(this);
    this.clearFilters = this.clearFilters.bind(this);
  }

  establishment() {
    return this.props.data.establishments.find(row => row.id === this.props.query.id);
  }

  breadcrumb() {
    return [
      { label: 'Home', href: '/dashboard' },
      { label: 'Establishment licences', href: '/establishment-licences' },
      { label: this.establishment().name, href: `/establishment?id=${this.props.query.id}` },
      'Named people and personal licence holders'
    ]
  }

  getPeople({ shouldFilter } = {}) {
    const role = this.state ? this.state.role : this.props.query.role;
    const filter = this.state ? this.state.filter : this.props.query.filter;
    let people = this.props.data.people;
    if (role) {
      people = people.filter(person => person.role === role);
    }
    if (shouldFilter !== false && filter) {
      people = people.filter(person => person.last_name[0].toLowerCase() === filter.toLowerCase());
    }
    console.log(people.length)
    return people;
  }

  getPerson() {
    const id = this.state ? this.state.person : this.props.query.person;
    const people = this.getPeople();
    return id
      ? people.find(person => person.id === id) || people && people[0]
      : people && people[0];
  }

  updateState(key, data) {
    appendToQueryString({ [key]: data });
    this.setState({ [key]: data })
  }

  isLink(letter) {
    const people = this.getPeople({ shouldFilter: false });
    const filter = this.state ? this.state.filter : this.props.query.filter;
    if (filter && filter.toLowerCase() === letter.toLowerCase()) {
      return false;
    }
    return some(people, person => person.last_name[0].toLowerCase() === letter.toLowerCase());
  }

  clearFilters() {
    this.updateState('filter');
  }

  content() {
    const establishment = this.establishment();
    return (
      <Fragment>
        <header>
          <h2>{ establishment.name }</h2>
          <h1>Named people and licence holders</h1>
        </header>
        <ul className="list">
          <li style={{ display: 'inline-block', marginRight: '0.5em' }}>
            {
              this.state && this.state.filter
                ? <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    this.updateState('filter');
                  }}>ALL</a>
                : 'ALL'
            }
          </li>
          {
            letters.map((letter, index) =>
              <li key={index} style={{ display: 'inline-block', marginRight: '0.5em' }}>
                {
                  this.isLink(letter)
                    ? <a href="#" onClick={(e) => {
                      e.preventDefault();
                      this.updateState('filter', letter.toLowerCase());
                    }}>{letter}</a>
                    : letter
                }
              </li>
            )
          }
        </ul>
        <TabBar>
          <TabItem
            href="#"
            onClick={(e) => {
              e.preventDefault();
              this.updateState('role')
            }}
            active={!(this.state ? this.state.role : this.props.query.role) || Object.keys(roles).indexOf(this.state ? this.state.role : this.props.query.role) === -1}
          >
            All
          </TabItem>
          {
            Object.keys(roles).map((role, index) =>
              <TabItem
                key={index}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  this.updateState('role', role);
                }}
                active={this.state ? this.state.role === role : this.props.query.role === role}
              >{role.toUpperCase()}</TabItem>
            )
          }
        </TabBar>
        <div className="grid-row">
          <div className="column-one-third">
            <People
              people={this.getPeople()}
              activePerson={this.getPerson()}
              onPersonClick={this.updateState}
              onClearFiltersClick={this.clearFilters}
            />
          </div>
          <div className="column-two-thirds">
            {
              this.getPerson() && <Person person={this.getPerson()} />
            }
          </div>
        </div>
      </Fragment>
    )
  }
}

export default NamedPeople;
