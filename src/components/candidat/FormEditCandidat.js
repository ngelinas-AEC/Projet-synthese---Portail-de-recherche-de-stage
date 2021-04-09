// <!-- FormEditCandidat.js -->
// <!-- Projet synthèse en développement WEB -->
// <!-- Nico Gelinas -->

import React , {useState , useEffect} from "react";
import { Form, Button,Image,Container,Row,Col } from "react-bootstrap";
import {toast} from "react-toastify"
import {API} from "../../Api_constante";
import { Link } from "react-router-dom";

function FormEditCandidat(props){
  const [donneesRecues , setDonneesRecues] = useState({nom: '', prenom: '', courriel: '', telephone: '', ville: '', competences: '', formations: '', cv: '', message: '' });
  const [CandidatID ] = useState(props.location.search.substring(4,props.location.search.length));
  const [Errors , setErrors] = useState("");

  useEffect(() => {
    getCandidat();
  },[]); 

  async function getCandidat() {
    try {
      const response = await fetch( API + CandidatID);
      const reponseDeApi = await response.json();
      setDonneesRecues(reponseDeApi);
      if (!response.ok) {
        throw Error(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function editCandidat(nom, prenom, courriel, telephone, ville, competences, formations, cv, message ) { 
    try{ 
      const response = await fetch( API + CandidatID, { 
        method:'PUT', 
        headers: {'Content-Type': 'application/json'  }, 
        body:JSON.stringify({
          nom: nom,
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
      if(response.ok){ 
        props.history.push("/Candidat");
        toast.info("Fiche du candidat modifié!!");

        return response; 
      } 
      throw new Error('Request failed!'); 
  } 
   catch(error){ 
      console.log(error); 
   } 
}

  function handleEdit(event){
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

    if(!formIsValid(nom, prenom, courriel, telephone, ville, competences, formations, cv, message)) return;

    editCandidat (nom, prenom, courriel, telephone, ville, competences, formations, cv, message);
  }

  function formIsValid(nom, prenom, courriel, telephone, ville, competences, formations, cv, message){
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

    setErrors(_errors);
    if (Object.keys(_errors).length !== 0)
      {toast.error("Remplissez tout les champs!!!")}

    return Object.keys(_errors).length === 0;
  }

      return (
      <>
      <Container className='p-4 text-center'>   
        <h2>Modifier les informations du candidat</h2> 
      </Container>
      <Container className='pb-4'>
        <Row>
          <Col>
            <Form>
              
            <Form.Label><h4>Identification</h4></Form.Label>
              <Form.Group as={Row} controlId="nom" className='border border-black py-3'>
                <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="nom">
                  <Form.Label>Nom</Form.Label>
                  <Form.Control type="text" placeholder="Entrer le nom" defaultValue={donneesRecues.nom}  isInvalid={!!Errors.nom} required />
                  <Form.Control.Feedback type='invalid'>
                    {Errors.nom}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="prenom">
                    <Form.Label>Prénom</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le prénom" defaultValue={donneesRecues.prenom} isInvalid={!!Errors.prenom} required />
                    <Form.Control.Feedback type='invalid'>
                    {Errors.prenom}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="courriel">
                    <Form.Label>Courriel</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le courriel" defaultValue={donneesRecues.courriel} isInvalid={!!Errors.courriel} required />
                    <Form.Control.Feedback type='invalid'>
                    {Errors.courriel}
                    </Form.Control.Feedback>
                  </Form.Group>


                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="telephone">
                    <Form.Label>Téléphone</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le téléphone" defaultValue={donneesRecues.telephone} isInvalid={!!Errors.telephone} required />
                    <Form.Control.Feedback type='invalid'>
                    {Errors.telephone}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="ville">
                    <Form.Label>Ville</Form.Label>
                    <Form.Control type="text" placeholder="Entrer la ville" defaultValue={donneesRecues.ville} isInvalid={!!Errors.ville} required />
                    <Form.Control.Feedback type='invalid'>
                    {Errors.ville}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="competences">
                    <Form.Label>competences</Form.Label>
                    <Form.Control type="text" placeholder="Entrer la competences" defaultValue={donneesRecues.competences} isInvalid={!!Errors.competences} required />
                    <Form.Control.Feedback type='invalid'>
                    {Errors.competences}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="formations">
                    <Form.Label>formations</Form.Label>
                    <Form.Control type="text" placeholder="Entrer la formations" defaultValue={donneesRecues.formations} isInvalid={!!Errors.formations} required />
                    <Form.Control.Feedback type='invalid'>
                    {Errors.formations}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="cv">
                    <Form.Label>cv</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le cv" defaultValue={donneesRecues.cv} isInvalid={!!Errors.cv} required />
                    <Form.Control.Feedback type='invalid'>
                    {Errors.cv}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="message">
                    <Form.Label>message</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le message" defaultValue={donneesRecues.message} isInvalid={!!Errors.message} required />
                    <Form.Control.Feedback type='invalid'>
                    {Errors.message}
                    </Form.Control.Feedback>
                  </Form.Group>


              </Form.Group>
            <Row>
              <Col xl="4" lg="4" md="4" sm="12" xs="12">
                <Button variant="primary" type="submit" onClick={handleEdit} to={"/candidats"}>
                    Enregistrer
                </Button>
            </Col>
              <Col xl="4" lg="4" md="4" sm="12" xs="12">
                    <Link className='links mx-2  btn btn-danger' to={"/Candidat"}>
                          <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-return-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
                          </svg> Retour a la liste des Candidats
                    </Link>

              </Col>
            </Row>
            </Form>  
            </Col>    
          </Row>
        </Container>
      </>
    );
  }

  export default FormEditCandidat;