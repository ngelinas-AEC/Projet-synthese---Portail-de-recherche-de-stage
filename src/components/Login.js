// <!-- Login.js -->
// <!-- Projet synthèse en développement WEB -->
// <!-- Nico Gelinas -->

import React, { useState } from 'react';
import {NavLink} from 'react-router-dom' 
import PropTypes from 'prop-types';
import '../styles/login.sass';
 
export class Login extends React.Component {
  render() {
   
    return(
      <div className="login-wrapper">
        <h1>Connexion</h1>
        <form>
            <h3>Nom utilisateur</h3>
            <input type="text" />
            <p>Mot de passe</p>
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