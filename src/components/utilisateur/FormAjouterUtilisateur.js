// <!-- FormAjouterUtilisateur.js -->
// <!-- Projet synthèse en développement WEB -->
// <!-- Nico Gelinas -->

import React from "react";
import { Form, Button, Image, Container, Row, Col } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import '../../styles/formAjout.sass';
import { toast } from "react-toastify";
import { APIUSER } from "../../Api_constante";
import { Link } from "react-router-dom";

export class FormAjouterUtilisateur extends React.Component {
  constructor(props) {
    super(props);
    this.state = { photo: "", errors: {} };
    this.handleAdd = this.handleAdd.bind(this);
    this.addUtilisateur = this.addUtilisateur.bind(this);
  }

  async addUtilisateur(nom, prenom, entreprise, nomentreprise, adresse, ville, region, logo, courriel, telephone, site, cv, motdepasse, actif, supprime, valide, niveauacces) {
    try {
      const response = await fetch(APIUSER, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nom: nom,
          prenom: prenom,
          entreprise: entreprise,
          nomentreprise: nomentreprise,
          adresse: adresse,
          ville: ville,
          region: region,
          logo: logo,
          courriel: courriel,
          telephone: telephone,
          site: site,
          cv: cv,
          motdepasse: motdepasse,
          actif: actif,
          supprime: supprime,
          valide: valide,
          niveauacces: niveauacces
          })
      });
      if (response.ok) {
        const jsonResponse = await response.json();
        this.props.history.push("/Utilisateur");
        toast.success("Ajout de l'utilisateur " + nom);
        return jsonResponse;
      }
      throw new Error('Request failed!');
    }
    catch (error) {
      console.log(error);
    }
  }

  formIsValid(nom, prenom, entreprise, nomentreprise, adresse, ville, region, logo, courriel, telephone, site, cv, motdepasse, actif, supprime, valide, niveauacces) {
    const _errors = {};
    
    if (!nom) _errors.nom = "Le est obligatoire";
    if (!prenom) _errors.prenom = "Le est obligatoire";
    if (!entreprise) _errors.entreprise = "Le est obligatoire";
    if (!nomentreprise) _errors.nomentreprise = "Le est obligatoire";
    if (!adresse) _errors.adresse = "Le est obligatoire";
    if (!ville) _errors.ville = "Le est obligatoire";
    if (!region) _errors.region = "Le est obligatoire";
    if (!logo) _errors.logo = "Le est obligatoire";
    if (!courriel) _errors.courriel = "Le est obligatoire";
    if (!telephone) _errors.telephone = "Le est obligatoire";
    if (!site) _errors.site = "Le est obligatoire";
    if (!cv) _errors.cv = "Le est obligatoire";
    if (!motdepasse) _errors.motdepasse = "Le est obligatoire";
    if (!actif) _errors.actif = "Le est obligatoire";
    if (!supprime) _errors.supprime = "Le est obligatoire";
    if (!valide) _errors.valide = "Le est obligatoire";
    if (!niveauacces) _errors.niveauacces = "Le est obligatoire";

    this.setState({ setErrors: _errors });

    if (Object.keys(_errors).length !== 0) {
      toast.error("Remplissez tout les champs!!!")
    }

    return Object.keys(_errors).length === 0;
  }


  handleAdd(event) {
    event.preventDefault();

    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value; 
    const entreprise = document.getElementById('entreprise').value;
    const nomentreprise = document.getElementById('nomentreprise').value;
    const adresse = document.getElementById('adresse').value;
    const ville = document.getElementById('ville').value;
    const region = document.getElementById('region').value;
    const logo = document.getElementById('logo').value;
    const courriel = document.getElementById('courriel').value;
    const telephone = document.getElementById('telephone').value;
    const site = document.getElementById('site').value;
    const cv = document.getElementById('cv').value;
    const motdepasse = document.getElementById('motdepasse').value;
    const actif = document.getElementById('actif').value;
    const supprime = document.getElementById('supprime').value;
    const valide = document.getElementById('valide').value;
    const niveauacces = document.getElementById('niveauacces').value;       

    if (!this.formIsValid(nom, prenom, entreprise, nomentreprise, adresse, ville, region, logo, courriel, telephone, site, cv, motdepasse, actif, supprime, valide, niveauacces)) return;

    this.addUtilisateur(nom, prenom, entreprise, nomentreprise, adresse, ville, region, logo, courriel, telephone, site, cv, motdepasse, actif, supprime, valide, niveauacces);
   
  }

  render() {
    console.log(this.props.history);
    return (
      <>
        <Container className='p-4 text-center'>
          <h2>Ajout d'un nouveau utilisateur</h2>
        </Container>
        <Container className='pb-4'>
          <Row>
            <Col>
              <Form>
                
                <Form.Label><h4>Identification</h4></Form.Label>
                <Form.Group as={Row} controlId="utilisateur" className='border border-black py-3'>   

                <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="nom">
                    <Form.Label>nom</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le nom" isInvalid={!!this.state.errors.nom} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.nom}
                    </Form.Control.Feedback>
                  </Form.Group>
				  
			      <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="prenom">
                    <Form.Label>prenom</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le prenom" isInvalid={!!this.state.errors.prenom} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.prenom}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="entreprise">
                    <Form.Label>entreprise</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le entreprise" isInvalid={!!this.state.errors.entreprise} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.entreprise}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="nomentreprise">
                    <Form.Label>nomentreprise</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le nomentreprise" isInvalid={!!this.state.errors.nomentreprise} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.nomentreprise}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="adresse">
                    <Form.Label>adresse</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le adresse" isInvalid={!!this.state.errors.adresse} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.adresse}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="ville">
                    <Form.Label>ville</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le ville" isInvalid={!!this.state.errors.ville} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.ville}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="region">
                    <Form.Label>region</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le region" isInvalid={!!this.state.errors.region} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.region}
                    </Form.Control.Feedback>
                  </Form.Group>
            
                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="logo">
                    <Form.Label>logo</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le logo" isInvalid={!!this.state.errors.logo} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.logo}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="courriel">
                    <Form.Label>courriel</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le courriel" isInvalid={!!this.state.errors.courriel} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.courriel}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="telephone">
                    <Form.Label>telephone</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le telephone" isInvalid={!!this.state.errors.telephone} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.telephone}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="site">
                    <Form.Label>site</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le site" isInvalid={!!this.state.errors.site} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.site}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="cv">
                    <Form.Label>cv</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le cv" isInvalid={!!this.state.errors.cv} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.cv}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="motdepasse">
                    <Form.Label>motdepasse</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le motdepasse" isInvalid={!!this.state.errors.motdepasse} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.motdepasse}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="actif">
                    <Form.Label>actif</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le actif" isInvalid={!!this.state.errors.actif} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.actif}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="supprime">
                    <Form.Label>supprime</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le supprime" isInvalid={!!this.state.errors.supprime} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.supprime}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="valide">
                    <Form.Label>valide</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le valide" isInvalid={!!this.state.errors.valide} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.valide}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="niveauacces">
                    <Form.Label>niveauacces</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le niveauacces" isInvalid={!!this.state.errors.niveauacces} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.niveauacces}
                    </Form.Control.Feedback>
                  </Form.Group>


                </Form.Group>

                <Button variant="primary" type="submit" onClick={this.handleAdd}>
                  Enregistrer
                </Button>

                <Link className='links mx-2  btn btn-danger' to={"/Utilisateur"}>
                  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-return-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z" />
                  </svg> Retour a la liste des Utilisateurs
                </Link>
              </Form>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}