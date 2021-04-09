// <!-- App.js -->
// <!-- Projet synthèse en développement WEB -->
// <!-- Nico Gelinas -->

import React from 'react';
import { Route, Switch } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import { Redirect } from "react-router-dom";

import { Accueil } from "./Accueil";
import { Header } from './Header';

import { FormCandidat } from './candidat/FormCandidat.js';
import { FormAjouterCandidat } from "./candidat/FormAjouterCandidat";
import { FicheCandidat } from "./candidat/FicheCandidat";
import FormEditCandidat from "./candidat/FormEditCandidat.js"

import { FormEntreprise } from './entreprise/FormEntreprise.js';
import { FormAjouterEntreprise } from "./entreprise/FormAjouterEntreprise";
import FormEditEntreprise from "./entreprise/FormEditEntreprise.js"

import { FormSecteur } from './secteur/FormSecteur.js';
import { FormAjouterSecteur } from "./secteur/FormAjouterSecteur";
import FormEditSecteur from "./secteur/FormEditSecteur.js"

import { FormOffre } from './offre/FormOffre.js';
import { FormAjouterOffre } from "./offre/FormAjouterOffre";
import FormEditOffre from "./offre/FormEditOffre.js"

import { FormDemande } from './demande/FormDemande.js';
import { FormAjouterDemande } from "./demande/FormAjouterDemande";
import FormEditDemande from "./demande/FormEditDemande.js"

import { FormUtilisateur } from './utilisateur/FormUtilisateur.js';
import { FormAjouterUtilisateur } from "./utilisateur/FormAjouterUtilisateur";
import FormEditUtilisateur from "./utilisateur/FormEditUtilisateur.js"

import { Login } from "./Login";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../styles/header.sass';

function App() {

  let location = useLocation();
  console.log(location.pathname);
  
  return (<div className='rep'>

    <Header />
    
    <div className='bg container-fluid m-0 p-0'>

      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
      <Switch>
        <Redirect exact from="/" to="/Accueil" />
        <Route path="/" exact component={Accueil} />
        <Route path="/Accueil" component={Accueil} />
        <Route path="/Login" component={Login} />

        <Route path="/Candidat" component={FormCandidat} />
        <Redirect exact from="/CandidatRefresh" to="/Candidat" />
        <Route path="/AjoutCandidat" component={FormAjouterCandidat} />
        <Route path="/Candidat/:id" component={FicheCandidat} />
        <Route path="/Edit/:id" component={FormEditCandidat} />
        
        <Route path="/Entreprise" component={FormEntreprise} />
        <Redirect exact from="/EntrepriseRefresh" to="/Entreprise" />
        <Route path="/AjoutEntreprise" component={FormAjouterEntreprise} />
        <Route path="/EditEntreprise/:id" component={FormEditEntreprise} />
        
        <Route path="/Secteur" component={FormSecteur} />
        <Redirect exact from="/SecteurRefresh" to="/Secteur" />
        <Route path="/AjoutSecteur" component={FormAjouterSecteur} />
        <Route path="/EditSecteur/:id" component={FormEditSecteur} />

        <Route path="/Offre" component={FormOffre} />
        <Redirect exact from="/OffreRefresh" to="/Offre" />
        
          <Route path="/AjoutOffre" component={FormAjouterOffre} />
          <Route path="/EditOffre/:id" component={FormEditOffre} />
  
        <Route path="/Demande" component={FormDemande} />
        <Redirect exact from="/DemandeRefresh" to="/Demande" />
        <Route path="/AjoutDemande" component={FormAjouterDemande} />
        <Route path="/EditDemande/:id" component={FormEditDemande} />

        <Route path="/Utilisateur" component={FormUtilisateur} />
        <Redirect exact from="/UtilisateurRefresh" to="/Utilisateur" />
        <Route path="/AjoutUtilisateur" component={FormAjouterUtilisateur} />
        <Route path="/EditUtilisateur/:id" component={FormEditUtilisateur} />
      </Switch>
    </div>
  </div>
  );
}

export default App;
