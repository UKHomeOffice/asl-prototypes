import React from 'react';
import { Form } from 'prototype-kit';

class Login extends Form {

  onSubmit(values) {
    if (!values.username) {
      return this.setState({ usernameerror: 'Please enter a username' });
    }
    if (!values.password) {
      return this.setState({ passworderror: 'Please enter a password' });
    }
    localStorage.setItem('name', values.username);
    this.redirect('/dashboard');
  }

  pageTitle() {
    return 'Log in';
  }

  submit() {
    return 'Log in';
  }

  fields() {
    return [
      { name: 'username', label: 'Username', error: this.state && this.state.usernameerror },
      { name: 'password', type: 'password', label: 'Password', error: this.state && this.state.passworderror }
    ]
  }

}

export default Login;
