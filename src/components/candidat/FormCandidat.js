// <!-- FormCandidat.js -->
// <!-- Projet synthèse en développement WEB -->
// <!-- Nico Gelinas -->

import React from "react";
import Candidat  from "./Candidat";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import {API} from "../../Api_constante";
import { Recherche } from '../Recherche';

export class FormCandidat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {donneesRecues: [], recherche: ""};

  }
   
  async componentDidMount(){
      try {
        const response = await fetch(API);
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
        <Col xl="9" lg="9" md="9" sm="9" xs="9" ><div><h2 className='titreRep'>Liste des Candidats</h2></div></Col>
       
        <Link className='links py-1' to={"AjoutCandidat/"}>
            Ajouter
        </Link>

        <Col xl="3" lg="3" md="3" sm="3" xs="3"><div><Recherche  recherche={(recherche)=>this.setState({ recherche: recherche})}/> </div></Col>
      </Row>
      </Container>
      <Container>
        <Row>        
          {this.state.donneesRecues.map((key, i) => ( (key.name.toLowerCase().includes(this.state.recherche.toLowerCase()) ) &&
          <Candidat history={this.props.history} key={i} CandidatData={key} id={key._id}></Candidat>
        ))}
        </Row>
      </Container>
      </>
    );
  }
  }
  
  export default FormCandidat;