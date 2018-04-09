import React from 'react';
import { Page } from 'prototype-kit';

class Home extends Page {

  content() {
    console.log(this.props);
    return <div>

      <h2>University of Croydon</h2>
      <h1>Schedule of Premises</h1>

      <table>
        <thead>
          <tr>
            <th>Site</th>
            <th>Building</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.data.places.map(place => (
              <tr>
                <td>{ place.site }</td>
                <td>{ place.building }</td>
                <td>{ place.name }</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  }

}

export default Home;
