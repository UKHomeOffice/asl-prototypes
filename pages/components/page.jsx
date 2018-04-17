import React from 'react';
import { Page } from 'prototype-kit';

class BasePage extends Page {

  componentDidMount() {
    const name = this.ucfirst(localStorage.getItem('name'));
    this.setState({ name })
    document.getElementById('profile').innerHTML = name;
  }

  ucfirst(str) {
    return str.substr(0, 1).toUpperCase() + str.substr(1);
  }

  title() {
    return <React.Fragment>
      <a href="/" id="proposition-name">{this.props.title}</a>
      <span>
        <span id="profile" /> - <a href="/">Sign out</a>
      </span>
    </React.Fragment>;
  }

  content() {
    return this.props.children;
  }

}

export default BasePage;