// <!-- Entreprise.js -->
// <!-- Projet synthèse en développement WEB -->
// <!-- Nico Gelinas -->

import React, { useRef } from "react";
import { Card } from "react-bootstrap"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import '../../styles/entreprise.sass';

import { SuppressionEntreprise } from "./SuppressionEntreprise";


function Entreprise(props) {
  let cardItem = useRef(null)

  return (
    <>
      <Col xl="4" lg="6" md="6" sm="12" className="my-4">

        <Card ref={el => { cardItem = el }} className="h-100">
          <Card.Body>
            <Card.Text>
              <b>Nom Entreprise: </b> {props.EntrepriseData.nomentreprise} 
              <br></br>
              <b>Prenom du contact: </b>{props.EntrepriseData.prenomcontact} 
              <br></br>
              <b>Nom du contact: </b>{props.EntrepriseData.nomcontact}
              <br></br>
              <b>Courriel: </b>{props.EntrepriseData.courriel}
              <br></br>
              <b>Teléphone: </b>{props.EntrepriseData.telephone}
              <br></br>
              <b>Adresse: </b>{props.EntrepriseData.adresse}
              <br></br>
              <b>Ville: </b>{props.EntrepriseData.ville}
              <br></br>
              <b>Site: </b>{props.EntrepriseData.site}
              <br></br>
              <b>Description: </b>{props.EntrepriseData.description}
              <br></br>
              <b>Secteur Activité: </b>{props.EntrepriseData.secteuractivite}
              <br></br>
              <b>Type de poste: </b>{props.EntrepriseData.typeposte}
            </Card.Text>
          </Card.Body>

          <Card.Footer>
            <div>
              <div className='d-flex justify-content-around '>
                <Link className='links py-1' to={"EditEntreprise/" + props.EntrepriseData.nom + "?id=" + props.id}>
                  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                  </svg>
                  Éditer
                </Link>
                <SuppressionEntreprise history={props.history} EntrepriseID={props.id} />
              </div>
            </div>

          </Card.Footer>
        </Card>
      </Col>
    </>
  );
}

export default Entreprise;
