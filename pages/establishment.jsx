import React from 'react';
import Page from './components/page';

class Establishment extends Page {

  establishment() {
    return this.props.data.establishments.find(row => row.id === this.props.query.id);
  }

  breadcrumb() {
    return [
      { label: 'Home', href: '/dashboard' },
      { label: 'Establishments', href: '/establishment-licences' },
      this.establishment().name
    ];
  }

  content() {
    // get the establishment with the id specified in the query string
    const establishment = this.establishment();

    return <React.Fragment>
      <header>
        <h2>&nbsp;</h2>
        <h1>{ establishment.name }</h1>
      </header>

      <div className="grid-row">
        <div className="column-two-thirds">
          <ul className="dashboard">
            <li><a href={`/details?id=${establishment.id}`}>Establishment details</a></li>
            <li><a href={`/people?id=${establishment.id}`}>Named people and licence holders</a></li>
            <li><a href={`/places?id=${establishment.id}`}>Licensed premises</a></li>
          </ul>
        </div>
        <div className="column-one-third">
          <aside>
            <dl>
              <dt>Licence number</dt>
              <dd>{ establishment.licenceNumber }</dd>

              <dt>Licence holder</dt>
              <dd><a href="/profile">{ establishment.elh }</a></dd>

              <dt>Home Office Liaison Contact (HOLC)</dt>
              <dd><a href="/profile">{ establishment.holc }</a></dd>
            </dl>
          </aside>
        </div>
      </div>
    </React.Fragment>
  }

}

export default Establishment;
