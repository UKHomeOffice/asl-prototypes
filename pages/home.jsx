import React from 'react';
import { Page } from 'prototype-kit';

class Home extends Page {

  content() {
    return <div>
      <h1>University of Croydon</h1>
      <p><a href="/places">Schedule of Premises</a></p>
    </div>
  }

}

export default Home;
