// <!-- Offre.js -->
// <!-- Projet synthèse en développement WEB -->
// <!-- Nico Gelinas -->

import React, { useRef } from "react";
import { Card } from "react-bootstrap"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import '../../styles/offre.sass';

import { SuppressionOffre } from "./SuppressionOffre";


function Offre(props) {
  let cardItem = useRef(null)

  return (
    <>
      <Col xl="4" lg="6" md="6" sm="12" className="my-4">

        <Card ref={el => { cardItem = el }} className="h-100">
          <Card.Body>
            <Card.Text>
            <b>Titre: </b>{props.OffreData.titre} 
              <br></br>
              <b>Type: </b>{props.OffreData.type} 
              <br></br>
              <b>Secteur: </b>{props.OffreData.secteur} 
              <br></br>
              <b>Ville: </b>{props.OffreData.ville} 
              <br></br>
              <b>Date de Début: </b>{props.OffreData.datededebut} 
              <br></br>
              <b>Date de Fin: </b>{props.OffreData.datedefin} 
              <br></br>
              <b>Durée du stage:</b> {props.OffreData.dureedustage} 
              <br></br>
              <b>Description:</b> {props.OffreData.description} 
              <br></br>
              <b>Heure par semaine:</b> {props.OffreData.heuressemaine} 
              <br></br>
              <b>Compétences:</b> {props.OffreData.competences} 
              <br></br>
              <b>Emploie après stage:</b> {props.OffreData.emploiapresstage} 
              <br></br>
              <b>Information supplémentaire:</b> {props.OffreData.informationssupp} 
              <br></br>
              <b>Formations:</b> {props.OffreData.formations} 
              <br></br>
              <b>Autre Formations:</b> {props.OffreData.autresformations} 
              <br></br>
              {props.OffreData.competences2} 
              <br></br>
              <b>Description du poste:</b> {props.OffreData.descriptionposte} 
              <br></br>
              <b>Type de stage:</b> {props.OffreData.typedestage} 
              <br></br>
              <b>Durée du stage:</b> {props.OffreData.dureestage} 
              <br></br>
              <b>Rénumération:</b> {props.OffreData.remuneration} 
              <br></br>
              <b>Date de parution:</b> {props.OffreData.dateparution} 
              <br></br>
              <b>Autre Informations:</b> {props.OffreData.autresinformations} 
              <br></br>
              <b>Auteur:</b> {props.OffreData.auteur} 
              <br></br>
            </Card.Text>
          </Card.Body>

          <Card.Footer>
            <div>
              <div className='d-flex justify-content-around '>
                <Link className='links py-1' to={"EditOffre/" + props.OffreData.nom + "?id=" + props.id}>
                  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                  </svg>
                  Éditer
                </Link>
                <SuppressionOffre history={props.history} OffreID={props.id} />
              </div>
            </div>

          </Card.Footer>
        </Card>
      </Col>
    </>
  );
}

export default Offre;
