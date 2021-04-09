// <!-- FormAjouterEntreprise.js -->
// <!-- Projet synthèse en développement WEB -->
// <!-- Nico Gelinas -->

import React from "react";
import { Form, Button, Image, Container, Row, Col } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import '../../styles/formAjout.sass';
import { toast } from "react-toastify";
import { APIENTREPRISE } from "../../Api_constante";
import { Link } from "react-router-dom";

export class FormAjouterEntreprise extends React.Component {
  constructor(props) {
    super(props);
    this.state = { photo: "", errors: {} };

    this.handleAdd = this.handleAdd.bind(this);
    this.addEntreprise = this.addEntreprise.bind(this);
  }

  async addEntreprise(nomentreprise, prenomcontact, nomcontact, courriel, telephone, adresse, ville, site, description, secteuractivite, typeposte) {
    try {
      const response = await fetch(APIENTREPRISE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nomentreprise: nomentreprise,
          prenomcontact: prenomcontact,
          nomcontact: nomcontact,
          courriel: courriel,
          telephone: telephone,
          adresse: adresse,
          ville: ville,
          site: site,
          description: description,
          secteuractivite: secteuractivite,
          typeposte: typeposte,
        })
      });
      if (response.ok) {
        const jsonResponse = await response.json();
        this.props.history.push("/Entreprise");
        toast.success("Ajout de l'entreprise " + nomentreprise);
        return jsonResponse;
      }
      throw new Error('Request failed!');
    }
    catch (error) {
      console.log(error);
    }
  }

  formIsValid(nomentreprise, prenomcontact, nomcontact, courriel, telephone, adresse, ville, site, description, secteuractivite, typeposte) {
    const _errors = {};
    
    if (!nomentreprise) _errors.nomentreprise = "Le est obligatoire";
    if (!prenomcontact) _errors.prenomcontact = "Le est obligatoire";
    if (!nomcontact) _errors.nomcontact = "Le est obligatoire";
    if (!courriel) _errors.courriel = "Le est obligatoire";
    if (!telephone) _errors.telephone = "Le est obligatoire";
    if (!adresse) _errors.adresse = "Le est obligatoire";
    if (!ville) _errors.ville = "Le est obligatoire";
    if (!site) _errors.site = "Le est obligatoire";
    if (!description) _errors.description = "Le est obligatoire";
    if (!secteuractivite) _errors.secteuractivite = "Le est obligatoire";
    if (!typeposte) _errors.typeposte = "Le est obligatoire";

    this.setState({ setErrors: _errors });

    if (Object.keys(_errors).length !== 0) {
      toast.error("Remplissez tout les champs!!!")
    }

    return Object.keys(_errors).length === 0;
  }


  handleAdd(event) {
    event.preventDefault();

    const nomentreprise = document.getElementById('nomentreprise').value;
    const prenomcontact = document.getElementById('prenomcontact').value;
    const nomcontact = document.getElementById('nomcontact').value;
    const courriel = document.getElementById('courriel').value;
    const telephone = document.getElementById('telephone').value;
    const adresse = document.getElementById('adresse').value;
    const ville = document.getElementById('ville').value;
    const site = document.getElementById('site').value;
    const description = document.getElementById('description').value;
    const secteuractivite = document.getElementById('secteuractivite').value;
    const typeposte = document.getElementById('typeposte').value;
     
    if (!this.formIsValid(nomentreprise, prenomcontact, nomcontact, courriel, telephone, adresse, ville, site, description, secteuractivite, typeposte)) return;

    this.addEntreprise( nomentreprise, prenomcontact, nomcontact, courriel, telephone, adresse, ville, site, description, secteuractivite, typeposte);
   
  }

  render() {
    console.log(this.props.history);
    return (
      <>
        <Container className='p-4 text-center'>
          <h2>Ajout d'une nouvelle entreprise</h2>
        </Container>
        <Container className='pb-4'>
          <Row>
            <Col>
              <Form>
                
                <Form.Label><h4>Identification</h4></Form.Label>
                <Form.Group as={Row} controlId="entreprise" className='border border-black py-3'>   

                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="nomentreprise">
                    <Form.Label>nomentreprise</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le nomentreprise" isInvalid={!!this.state.errors.nomentreprise} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.nomentreprise}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="prenomcontact">
                    <Form.Label>prenomcontact</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le prenomcontact" isInvalid={!!this.state.errors.prenomcontact} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.prenomcontact}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="nomcontact">
                    <Form.Label>nomcontact</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le nomcontact" isInvalid={!!this.state.errors.nomcontact} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.nomcontact}
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

                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="site">
                    <Form.Label>site</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le site" isInvalid={!!this.state.errors.site} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.site}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="description">
                    <Form.Label>description</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le description" isInvalid={!!this.state.errors.description} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.description}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="secteuractivite">
                    <Form.Label>secteuractivite</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le secteuractivite" isInvalid={!!this.state.errors.secteuractivite} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.secteuractivite}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="typeposte">
                    <Form.Label>typeposte</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le typeposte" isInvalid={!!this.state.errors.typeposte} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.typeposte}
                    </Form.Control.Feedback>
                  </Form.Group>

                </Form.Group>

                <Button variant="primary" type="submit" onClick={this.handleAdd}>
                  Enregistrer
                </Button>

                <Link className='links mx-2  btn btn-danger' to={"/Entreprise"}>
                  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-return-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z" />
                  </svg> Retour a la liste des Entreprises
                </Link>
              </Form>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}