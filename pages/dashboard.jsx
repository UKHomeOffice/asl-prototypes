import React from 'react';
import { Page } from 'prototype-kit';

class Dashboard extends Page {

  componentDidMount() {
    this.setState({
      name: localStorage.getItem('name')
    });
  }

  ucfirst(str) {
    return str.substr(0, 1).toUpperCase() + str.substr(1);
  }

  content() {
    const name = this.state && this.state.name;
    return <React.Fragment>
      <header>
        <h2>&nbsp;</h2>
        { name && <h1>Hello { this.ucfirst(name) }</h1> }
      </header>

      <div className="grid-row">
        <div className="column-two-thirds">
          <ul className="dashboard">
            <li><a href={`/establishment-licences`}>Establishments</a></li>
            <li><a href={`/personal-licences`}>Personal licences</a></li>
            <li><a href={`/project-licences`}>Project licences</a></li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  }

}

export default Dashboard;
