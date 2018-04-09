import React from 'react';
import { Form } from 'prototype-kit';

class Login extends Form {

  onSubmit() {
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
      { label: 'Password' }
    ]
  }

}

export default Login;
