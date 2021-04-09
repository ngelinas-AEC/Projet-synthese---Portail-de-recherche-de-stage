// <!-- FicheEntreprise.js -->
// <!-- Projet synthèse en développement WEB -->
// <!-- Nico Gelinas -->

import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import { API } from "../../Api_constante";

export class FicheCandidat extends React.Component {
  constructor(props) {
    super(props);
    this.state = { donneesRecues: '', }
  }

  async componentDidMount() {
    try {
      await this.setState({ CandidatID: this.props.location.search.substring(4, this.props.location.search.length) });
      const response = await fetch(API + this.state.CandidatID);
      const reponseDeApi = await response.json();
      this.setState({ donneesRecues: reponseDeApi });
      if (!response.ok) {
        throw Error(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (<div className='fiche'>
      <Container fluid className='p-4 text-center titreDossier'>
        <h3>Fiche du candidat</h3>
        <h2>{this.state.donneesRecues.name} {this.state.donneesRecues.prenom}</h2>
      </Container>
      <Container className='mb-5'>
        <Row>
          <Col xl="12" lg="12" md="12" sm="12" className='mb-3'>
            <Card>
              <Card.Body>
                <Card.Title className='border-bottom border-dark'>INFORMATIONS</Card.Title>
                <Card.Text>
                  <b>Formation:</b> {this.state.donneesRecues.formations}
                  <br></br>
                  <b>Ville:</b> {this.state.donneesRecues.ville}
                  <br></br>
                  <b>Compétences:</b> {this.state.donneesRecues.competences}
                  <br></br>
                  <b>{this.state.donneesRecues.message} </b>
                </Card.Text>
                <Card.Title className='border-bottom border-dark'></Card.Title>
                <Link className='links  mx-2  btn btn-danger' to={"/Candidats"}>
                  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-return-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z" />
                  </svg> Retour a la liste des Candidats
                </Link>
              </Card.Body>
              <Card.Footer>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
    );
  }

}