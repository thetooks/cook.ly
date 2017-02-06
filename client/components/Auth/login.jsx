
// src/views/Main/Login/Login.js

import React, { PropTypes as T } from 'react'
import {ButtonToolbar, Button} from 'react-bootstrap'
import AuthService from '../../utils/AuthService'
// import styles from './styles.module.css'

export class Login extends React.Component {
  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }

  render() {
    const wellStyles = {maxWidth: 400, margin: '0 auto 10px', fontFamily: 'Helvetica Neue' };
    const { auth } = this.props
    return (
      <div className="well" style={wellStyles} >
        <h2 >Please Login</h2>
        <ButtonToolbar >
          <Button bsStyle="danger" bsSize="large" onClick={auth.login.bind(this)} block>Login</Button>
        </ButtonToolbar>
      </div>
    )
  }
}


export default Login;

