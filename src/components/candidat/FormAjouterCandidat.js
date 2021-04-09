// <!-- FormAjouterCandidat.js -->
// <!-- Projet synthèse en développement WEB -->
// <!-- Nico Gelinas -->

import React from "react";
import { Form, Button, Image, Container, Row, Col } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import '../../styles/formAjout.sass';
import { toast } from "react-toastify";
import { API } from "../../Api_constante";
import { Link } from "react-router-dom";

export class FormAjouterCandidat extends React.Component {
  constructor(props) {
    super(props);
    this.state = { photo: "", errors: {} };

    this.handleAdd = this.handleAdd.bind(this);
    this.addCandidat = this.addCandidat.bind(this);
  }

  async addCandidat(nom, prenom, courriel, telephone, ville, competences, formations, cv, message) {
    try {
      const response = await fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: nom,
          prenom: prenom,
          courriel: courriel,
          telephone: telephone,
          ville: ville,
          competences: competences,
          formations: formations,
          cv: cv,
          message: message,
        })
      });
      if (response.ok) {
        const jsonResponse = await response.json();
        this.props.history.push("/Candidat");
        toast.success("Ajout du candidat " + nom + " " + prenom);
        return jsonResponse;
      }
      throw new Error('Request failed!');
    }
    catch (error) {
      console.log(error);
    }
  }

  formIsValid(nom, prenom, courriel, telephone, ville, competences, formations, cv, message) {
    const _errors = {};
    if (!nom) _errors.nom = "Le nom est obligatoire";
    if (!prenom) _errors.prenom = "Le prenom est obligatoire";
    if (!courriel) _errors.courriel = "Le courriel est obligatoire";
    if (!telephone) _errors.telephone = "Le telephone est obligatoire";
    if (!ville) _errors.ville = "Le ville est obligatoire";
    if (!competences) _errors.competences = "Le competences est obligatoire";
    if (!formations) _errors.formations = "Le formations est obligatoire";
    if (!cv) _errors.cv = "Le cv est obligatoire";
    if (!message) _errors.message = "Le message est obligatoire";

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
    const courriel = document.getElementById('courriel').value;
    const telephone = document.getElementById('telephone').value;
    const ville = document.getElementById('ville').value;
    const competences = document.getElementById('competences').value;
    const formations = document.getElementById('formations').value;
    const cv = document.getElementById('cv').value;
    const message = document.getElementById('message').value;



    if (!this.formIsValid(nom, prenom, courriel, telephone, ville, competences, formations, cv, message )) return;

    this.addCandidat( nom, prenom, courriel, telephone, ville, competences, formations, cv, message);
   
  }

  render() {
    console.log(this.props.history);
    return (
      <>
        <Container className='p-4 text-center'>
          <h2>Ajout d'un nouveau candidat</h2>
        </Container>
        <Container className='pb-4'>
          <Row>
            <Col>
              <Form>
                
                <Form.Label><h4>Identification</h4></Form.Label>
                <Form.Group as={Row} controlId="nom" className='border border-black py-3'>                                
                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="nom">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le nom" isInvalid={!!this.state.errors.nom} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.nom}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="prenom">
                    <Form.Label>Prénom</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le prénom" isInvalid={!!this.state.errors.prenom} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.prenom}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="courriel">
                    <Form.Label>Courriel</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le courriel" isInvalid={!!this.state.errors.courriel} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.courriel}
                    </Form.Control.Feedback>
                  </Form.Group>


                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="telephone">
                    <Form.Label>Téléphone</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le téléphone" isInvalid={!!this.state.errors.telephone} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.telephone}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="ville">
                    <Form.Label>Ville</Form.Label>
                    <Form.Control type="text" placeholder="Entrer la ville" isInvalid={!!this.state.errors.ville} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.ville}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="competences">
                    <Form.Label>competences</Form.Label>
                    <Form.Control type="text" placeholder="Entrer la competences" isInvalid={!!this.state.errors.competences} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.competences}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="formations">
                    <Form.Label>formations</Form.Label>
                    <Form.Control type="text" placeholder="Entrer la formations" isInvalid={!!this.state.errors.formations} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.formations}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="cv">
                    <Form.Label>cv</Form.Label>
                    <Form.Control type="text" placeholder="Entrer la cv" isInvalid={!!this.state.errors.cv} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.cv}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="message">
                    <Form.Label>message</Form.Label>
                    <Form.Control type="text" placeholder="Entrer la message" isInvalid={!!this.state.errors.message} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                </Form.Group>

                <Button variant="primary" type="submit" onClick={this.handleAdd}>
                  Enregistrer
            </Button>
                <Link className='links mx-2  btn btn-danger' to={"/Candidat"}>
                  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-return-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z" />
                  </svg> Retour a la liste des Candidats
                </Link>
              </Form>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}