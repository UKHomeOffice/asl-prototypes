import React from 'react';
import Page from './components/page';

class Dashboard extends Page {

  content() {
    return <React.Fragment>
      <header>
        <h2>&nbsp;</h2>
        { this.state && this.state.name && <h1>Hello { this.state.name }</h1> }
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
