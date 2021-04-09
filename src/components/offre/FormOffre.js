// <!-- FormOffre.js -->
// <!-- Projet synthèse en développement WEB -->
// <!-- Nico Gelinas -->

import React from "react";
import Offre  from "./Offre";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import {APIOFFRE} from "../../Api_constante";

export class FormOffre extends React.Component {
  constructor(props) {
    super(props);
    this.state = {donneesRecues: [], recherche: ""};

  }
   
  async componentDidMount(){
      try {
        const response = await fetch(APIOFFRE);
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
                <h2 className='titreRep'>Liste des Offres</h2>       
                <Link className='links py-1' to={"AjoutOffre/"}>
                    Ajouter
                </Link>
            </div>
        </Col>
 
      </Row>
      </Container>
      <Container>
        <Row>        
          {this.state.donneesRecues.map((key, i) => ( 
          <Offre history={this.props.history} key={i} OffreData={key} id={key._id}></Offre>
        ))}
        </Row>
      </Container>
      </>
    );
  }
  }
  
  export default FormOffre;