// <!-- FormDemande.js -->
// <!-- Projet synthèse en développement WEB -->
// <!-- Nico Gelinas -->

import React from "react";
import Demande  from "./Demande";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import {APIDEMANDE} from "../../Api_constante";

export class FormDemande extends React.Component {
  constructor(props) {
    super(props);
    this.state = {donneesRecues: [], recherche: ""};
  }
   
  async componentDidMount(){
      try {
        const response = await fetch(APIDEMANDE);
        const reponseDeApi = await response.json();
        this.setState({donneesRecues:reponseDeApi});
        if (!response.ok) {
          throw Error(response.statusText);
        }
      } catch (error) {
        console.log(error);
      }
    }
    render()
  {

    return (
      <>
      <Container className='p-4 d-flex justify-content-around'>   
      <Row>
          <Col xl="12" lg="12" md="12" sm="12" xs="12" >
              <div>
                  <h2 className='titreRep'>Liste des Demandes</h2>       
                  <Link className='links py-1' to={"AjoutDemande/"}>
                      Ajouter
                  </Link>
              </div>
          </Col>
       </Row>
      </Container>
      <Container>
        <Row>        
          {this.state.donneesRecues.map((key, i) => ( 
          <Demande history={this.props.history} key={i} DemandeData={key} id={key._id}></Demande>
        ))}
        </Row>
      </Container>
      </>
    );
  }
  }
  
  export default FormDemande;