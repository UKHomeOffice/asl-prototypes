import React from 'react';
import { Form } from 'prototype-kit';

class Login extends Form {

  onSubmit(values) {
    this.redirect('/home');
  }

  pageTitle() {
    return 'Log in';
  }

  submit() {
    return 'Log in';
  }

  fields() {
    return [
      { label: 'Username' },
      { type: 'password', label: 'Password' }
    ]
  }

}

export default Login;
