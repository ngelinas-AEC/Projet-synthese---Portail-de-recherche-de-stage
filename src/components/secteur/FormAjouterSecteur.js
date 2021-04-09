// <!-- FormAjouterSecteur.js -->
// <!-- Projet synthèse en développement WEB -->
// <!-- Nico Gelinas -->

import React from "react";
import { Form, Button, Image, Container, Row, Col } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import '../../styles/formAjout.sass';
import { toast } from "react-toastify";
import { APISECTEUR } from "../../Api_constante";
import { Link } from "react-router-dom";

export class FormAjouterSecteur extends React.Component {
  constructor(props) {
    super(props);
    this.state = { photo: "", errors: {} };

    this.handleAdd = this.handleAdd.bind(this);
    this.addSecteur = this.addSecteur.bind(this);
  }

  async addSecteur(titre, actif, supprime) {
    try {
      const response = await fetch(APISECTEUR, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          titre: titre,
          actif: actif,
          supprime: supprime,
        })
      });
      if (response.ok) {
        const jsonResponse = await response.json();
        this.props.history.push("/Secteur");
        toast.success("Ajout du secteur " + titre);
        return jsonResponse;
      }
      throw new Error('Request failed!');
    }
    catch (error) {
      console.log(error);
    }
  }

  formIsValid(titre, actif, supprime) {
    const _errors = {};
    
    if (!titre) _errors.titre = "Le est obligatoire";
    if (!actif) _errors.actif = "Le est obligatoire";
    if (!supprime) _errors.supprime = "Le est obligatoire";

    this.setState({ setErrors: _errors });

    if (Object.keys(_errors).length !== 0) {
      toast.error("Remplissez tout les champs!!!")
    }

    return Object.keys(_errors).length === 0;
  }


  handleAdd(event) {
    event.preventDefault();

    const titre = document.getElementById('titre').value;
    const actif = document.getElementById('actif').value;
    const supprime = document.getElementById('supprime').value;
     
    if (!this.formIsValid(titre, actif, supprime)) return;

    this.addSecteur(titre, actif, supprime);
   
  }

  render() {
    console.log(this.props.history);
    return (
      <>
        <Container className='p-4 text-center'>
          <h2>Ajout d'un nouveau secteur</h2>
        </Container>
        <Container className='pb-4'>
          <Row>
            <Col>
              <Form>
                
                <Form.Label><h4>Identification</h4></Form.Label>
                <Form.Group as={Row} controlId="secteur" className='border border-black py-3'>   

                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="titre">
                    <Form.Label>titre</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le titre" isInvalid={!!this.state.errors.titre} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.titre}
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


                </Form.Group>

                <Button variant="primary" type="submit" onClick={this.handleAdd}>
                  Enregistrer
                </Button>

                <Link className='links mx-2  btn btn-danger' to={"/Secteur"}>
                  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-return-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z" />
                  </svg> Retour a la liste des Secteurs
                </Link>
              </Form>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}