import React, { useState } from 'react';
import {NavLink} from 'react-router-dom' 
import PropTypes from 'prop-types';
import '../styles/login.sass';
 
export class Login extends React.Component {
  render() {

    
    return(
      <div className="login-wrapper">
        <h1>Please Log In</h1>
        <form>
            <h3>Username</h3>
            <input type="text" />
            <p>Password</p>
            <input type="password" />
          <div>
          <br></br>
          <NavLink className="buttoninscription" type="submit" onClick={this.handleClick} to="/offre">
            Submit
          </NavLink>

          </div>
        </form>
      </div>
    )
  }
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};