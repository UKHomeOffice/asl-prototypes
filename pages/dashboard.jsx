import React from 'react';
import { Page } from 'prototype-kit';

class Establishment extends Page {

  breadcrumb() {
    return [
      { label: 'Home', href: '/home' },
      this.establishment().name
    ];
  }

  content() {

    return <React.Fragment>
      <header>
        <h2>&nbsp;</h2>
        <h1>Good morning Ben</h1>
      </header>

      <div className="grid-row">
        <div className="column-two-thirds">
          <ul>
            <li><a href={`/establishment-licences`}>Establishments</a></li>
            <li><a href={`/personal-licences`}>Personal licences</a></li>
            <li><a href={`/project-licences`}>Project licences</a></li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  }

}

export default Establishment;
