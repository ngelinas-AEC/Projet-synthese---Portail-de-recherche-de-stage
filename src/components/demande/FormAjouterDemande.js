// <!-- FormAjouterDemande.js -->
// <!-- Projet synthèse en développement WEB -->
// <!-- Nico Gelinas -->

import React from "react";
import { Form, Button, Image, Container, Row, Col } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import '../../styles/formAjout.sass';
import { toast } from "react-toastify";
import { APIDEMANDE } from "../../Api_constante";
import { Link } from "react-router-dom";

export class FormAjouterDemande extends React.Component {
  constructor(props) {
    super(props);
    this.state = { photo: "", errors: {} };

    this.handleAdd = this.handleAdd.bind(this);
    this.addDemande = this.addDemande.bind(this);
  }

  async addDemande(titre, type, secteur, ville, datededebut, datedefin, dureedustage, description, heuressemaine, competences, emploiapresstage, informationssupp
    , formations, autresformations, competences2, descriptionposte, typedestage, dureestage, remuneration, dateparution, autresinformations, auteur, actif, supprime
    , valide) {
    try {
      const response = await fetch(APIDEMANDE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          titre: titre,
          type: type,
          secteur:secteur,
          ville:ville,
          datededebut:datededebut,
          datedefin:datedefin,
          dureedustage:dureedustage,
          description:description,
          heuressemaine:heuressemaine,
          competences:competences,
          emploiapresstage:emploiapresstage,
          informationssupp:informationssupp,
          formations:formations,
          autresformations:autresformations,
          competences2:competences2,
          descriptionposte:descriptionposte,
          typedestage:typedestage,
          dureestage:dureestage,
          remuneration:remuneration,
          dateparution:dateparution,
          autresinformations:autresinformations,
          auteur:auteur,
          actif:actif,
          supprime:supprime,
          valide:valide,
        })
      });
      if (response.ok) {
        const jsonResponse = await response.json();
        this.props.history.push("/Demande");
        toast.success("Ajout d'un Demande " + titre);
        return jsonResponse;
      }
      throw new Error('Request failed!');
    }
    catch (error) {
      console.log(error);
    }
  }

  formIsValid(titre, type, secteur, ville, datededebut, datedefin, dureedustage, description, heuressemaine, competences, emploiapresstage, informationssupp
    , formations, autresformations, competences2, descriptionposte, typedestage, dureestage, remuneration, dateparution, autresinformations, auteur, actif, supprime
    , valide) {
    const _errors = {};
    
    if (!titre) _errors.titre = "Le est obligatoire";
    if (!type) _errors.type = "Le est obligatoire";
    if (!secteur) _errors.secteur = "Le est obligatoire";
    if (!ville) _errors.ville = "Le est obligatoire";
    if (!datededebut) _errors.datededebut = "Le est obligatoire";
    if (!datedefin) _errors.datedefin = "Le est obligatoire";
    if (!dureedustage) _errors.dureedustage = "Le est obligatoire";
    if (!description) _errors.description = "Le est obligatoire";
    if (!heuressemaine) _errors.heuressemaine = "Le est obligatoire";
    if (!competences) _errors.competences = "Le est obligatoire";
    if (!emploiapresstage) _errors.emploiapresstage = "Le est obligatoire";
    if (!informationssupp) _errors.informationssupp = "Le est obligatoire";
    if (!formations) _errors.formations = "Le est obligatoire";
    if (!autresformations) _errors.autresformations = "Le est obligatoire";
    if (!competences2) _errors.competences2 = "Le est obligatoire";
    if (!descriptionposte) _errors.descriptionposte = "Le est obligatoire";
    if (!typedestage) _errors.typedestage = "Le est obligatoire";
    if (!dureestage) _errors.dureestage = "Le est obligatoire";
    if (!remuneration) _errors.remuneration = "Le est obligatoire";
    if (!dateparution) _errors.dateparution = "Le est obligatoire";
    if (!autresinformations) _errors.autresinformations = "Le est obligatoire";
    if (!auteur) _errors.auteur = "Le est obligatoire";
    if (!actif) _errors.actif = "Le est obligatoire";
    if (!supprime) _errors.supprime = "Le est obligatoire";
    if (!valide) _errors.valide = "Le est obligatoire";

    this.setState({ setErrors: _errors });

    if (Object.keys(_errors).length !== 0) {
      toast.error("Remplissez tout les champs!!!")
    }

    return Object.keys(_errors).length === 0;
  }

  handleAdd(event) {
    event.preventDefault();

    const titre = document.getElementById('titre').value;
    const type = document.getElementById('type').value;
    const secteur = document.getElementById('secteur').value;
    const ville = document.getElementById('ville').value;
    const datededebut = document.getElementById('datededebut').value;
    const datedefin = document.getElementById('datedefin').value;
    const dureedustage = document.getElementById('dureedustage').value;
    const description = document.getElementById('description').value;
    const heuressemaine = document.getElementById('heuressemaine').value;
    const competences = document.getElementById('competences').value;
    const emploiapresstage = document.getElementById('emploiapresstage').value;
    const informationssupp = document.getElementById('informationssupp').value;
    const formations = document.getElementById('formations').value;
    const autresformations = document.getElementById('autresformations').value;
    const competences2 = document.getElementById('competences2').value;
    const descriptionposte = document.getElementById('descriptionposte').value;
    const typedestage = document.getElementById('typedestage').value;
    const dureestage = document.getElementById('dureestage').value;
    const remuneration = document.getElementById('remuneration').value;
    const dateparution = document.getElementById('dateparution').value;
    const autresinformations = document.getElementById('autresinformations').value;
    const auteur = document.getElementById('auteur').value;
    const actif = document.getElementById('actif').value;
    const supprime = document.getElementById('supprime').value;
    const valide = document.getElementById('valide').value;

    if (!this.formIsValid(titre, type, secteur, ville, datededebut, datedefin, dureedustage, description, heuressemaine, competences, emploiapresstage, informationssupp
      , formations, autresformations, competences2, descriptionposte, typedestage, dureestage, remuneration, dateparution, autresinformations, auteur, actif, supprime
      , valide)) return;

    this.addDemande(titre, type, secteur, ville, datededebut, datedefin, dureedustage, description, heuressemaine, competences, emploiapresstage, informationssupp
      , formations, autresformations, competences2, descriptionposte, typedestage, dureestage, remuneration, dateparution, autresinformations, auteur, actif, supprime
      , valide);
   
  }

  render() {
    console.log(this.props.history);
    return (
      <>
        <Container className='p-4 text-center'>
          <h2>Ajout d'une nouvelle Demande</h2>
        </Container>
        <Container className='pb-4'>
          <Row>
            <Col>
              <Form>
                
                <Form.Label><h4>Identification</h4></Form.Label>
                <Form.Group as={Row} controlId="demande" className='border border-black py-3'>   

                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="titre">
                    <Form.Label>titre</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le titre" isInvalid={!!this.state.errors.titre} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.titre}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="type">
                    <Form.Label>type</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le type" isInvalid={!!this.state.errors.type} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.type}
                    </Form.Control.Feedback>
                  </Form.Group>
                  
                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="secteur">
                    <Form.Label>secteur</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le secteur" isInvalid={!!this.state.errors.secteur} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.secteur}
                    </Form.Control.Feedback>
                  </Form.Group>
     
                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="ville">
                    <Form.Label>ville</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le ville" isInvalid={!!this.state.errors.ville} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.ville}
                    </Form.Control.Feedback>
                  </Form.Group>
     
                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="datededebut">
                    <Form.Label>datededebut</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le datededebut" isInvalid={!!this.state.errors.datededebut} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.datededebut}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="datedefin">
                    <Form.Label>datedefin</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le datedefin" isInvalid={!!this.state.errors.datedefin} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.datedefin}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="dureedustage">
                    <Form.Label>dureedustage</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le dureedustage" isInvalid={!!this.state.errors.dureedustage} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.dureedustage}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="description">
                    <Form.Label>description</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le description" isInvalid={!!this.state.errors.description} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.description}
                    </Form.Control.Feedback>
                  </Form.Group>


                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="heuressemaine">
                    <Form.Label>heuressemaine</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le heuressemaine" isInvalid={!!this.state.errors.heuressemaine} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.heuressemaine}
                    </Form.Control.Feedback>
                  </Form.Group>
                 
                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="competences">
                    <Form.Label>competences</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le competences" isInvalid={!!this.state.errors.competences} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.competences}
                    </Form.Control.Feedback>
                  </Form.Group>
                 
                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="emploiapresstage">
                    <Form.Label>emploiapresstage</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le emploiapresstage" isInvalid={!!this.state.errors.emploiapresstage} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.emploiapresstage}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="informationssupp">
                    <Form.Label>informationssupp</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le informationssupp" isInvalid={!!this.state.errors.informationssupp} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.informationssupp}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="formations">
                    <Form.Label>formations</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le formations" isInvalid={!!this.state.errors.formations} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.formations}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="autresformations">
                    <Form.Label>autresformations</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le autresformations" isInvalid={!!this.state.errors.autresformations} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.autresformations}
                    </Form.Control.Feedback>
                  </Form.Group>


                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="competences2">
                    <Form.Label>competences2</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le competences2" isInvalid={!!this.state.errors.competences2} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.competences2}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="descriptionposte">
                    <Form.Label>descriptionposte</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le descriptionposte" isInvalid={!!this.state.errors.descriptionposte} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.descriptionposte}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="typedestage">
                    <Form.Label>typedestage</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le typedestage" isInvalid={!!this.state.errors.typedestage} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.typedestage}
                    </Form.Control.Feedback>
                  </Form.Group>



                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="dureestage">
                    <Form.Label>dureestage</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le dureestage" isInvalid={!!this.state.errors.dureestage} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.dureestage}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="remuneration">
                    <Form.Label>remuneration</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le remuneration" isInvalid={!!this.state.errors.remuneration} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.remuneration}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="dateparution">
                    <Form.Label>dateparution</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le dateparution" isInvalid={!!this.state.errors.dateparution} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.dateparution}
                    </Form.Control.Feedback>
                  </Form.Group>


                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="autresinformations">
                    <Form.Label>autresinformations</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le autresinformations" isInvalid={!!this.state.errors.autresinformations} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.autresinformations}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="auteur">
                    <Form.Label>auteur</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le auteur" isInvalid={!!this.state.errors.auteur} required />
                    <Form.Control.Feedback type='invalid'>
                      {this.state.errors.auteur}
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


                </Form.Group>

                <Button variant="primary" type="submit" onClick={this.handleAdd}>
                  Enregistrer
                </Button>

                <Link className='links mx-2  btn btn-danger' to={"/Demande"}>
                  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-return-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z" />
                  </svg> Retour a la liste des Demandes
                </Link>
              </Form>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}