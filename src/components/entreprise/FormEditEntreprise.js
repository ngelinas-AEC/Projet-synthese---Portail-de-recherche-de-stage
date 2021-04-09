// <!-- FormEditEntreprise.js -->
// <!-- Projet synthèse en développement WEB -->
// <!-- Nico Gelinas -->

import React , {useState , useEffect} from "react";
import { Form, Button,Image,Container,Row,Col } from "react-bootstrap";
import {toast} from "react-toastify"
import {APIENTREPRISE} from "../../Api_constante";
import { Link } from "react-router-dom";

function FormEditEntreprise(props){
  const [donneesRecues , setDonneesRecues] = useState({nom: '', prenom: '', courriel: '', telephone: '', ville: '', competences: '', formations: '', cv: '', message: '' });
  const [EntrepriseID ] = useState(props.location.search.substring(4,props.location.search.length));
  const [Errors , setErrors] = useState("");

  useEffect(() => {
    getEntreprise();
  },[]); 

  async function getEntreprise() {
    try {
      const response = await fetch( APIENTREPRISE + EntrepriseID);
      const reponseDeApi = await response.json();
      setDonneesRecues(reponseDeApi);
      if (!response.ok) {
        throw Error(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function editEntreprise(nomentreprise, prenomcontact, nomcontact, courriel, telephone, adresse, ville, site, description, secteuractivite, typeposte ) { 
    try{ 
      const response = await fetch( APIENTREPRISE + EntrepriseID, { 
        method:'PUT', 
        headers: {'Content-Type': 'application/json'  }, 
        body:JSON.stringify({
          nomentreprise: nomentreprise,
          prenomcontact: prenomcontact,
          nomcontact: nomcontact,
          courriel: courriel,
          telephone: telephone,
          adresse: adresse,
          ville: ville,
          site: site,
          description: description,
          secteuractivite: secteuractivite,
          typeposte: typeposte,
          })  
      }); 
      if(response.ok){ 
        props.history.push("/Entreprise");
        toast.info("Fiche de l'entreprise " + nomentreprise + " modifié!!");

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

    const nomentreprise = document.getElementById('nomentreprise').value;
    const prenomcontact = document.getElementById('prenomcontact').value;
    const nomcontact = document.getElementById('nomcontact').value;
    const courriel = document.getElementById('courriel').value;
    const telephone = document.getElementById('telephone').value;
    const adresse = document.getElementById('adresse').value;
    const ville = document.getElementById('ville').value;
    const site = document.getElementById('site').value;
    const description = document.getElementById('description').value;
    const secteuractivite = document.getElementById('secteuractivite').value;
    const typeposte = document.getElementById('typeposte').value;

    if(!formIsValid(nomentreprise, prenomcontact, nomcontact, courriel, telephone, adresse, ville, site, description, secteuractivite, typeposte)) return;

    editEntreprise (nomentreprise, prenomcontact, nomcontact, courriel, telephone, adresse, ville, site, description, secteuractivite, typeposte);
  }

  function formIsValid(nomentreprise, prenomcontact, nomcontact, courriel, telephone, adresse, ville, site, description, secteuractivite, typeposte){
    const _errors = {};
   
    if (!nomentreprise) _errors.nomentreprise = "Le est obligatoire";
    if (!prenomcontact) _errors.prenomcontact = "Le est obligatoire";
    if (!nomcontact) _errors.nomcontact = "Le est obligatoire";
    if (!courriel) _errors.courriel = "Le est obligatoire";
    if (!telephone) _errors.telephone = "Le est obligatoire";
    if (!adresse) _errors.adresse = "Le est obligatoire";
    if (!ville) _errors.ville = "Le est obligatoire";
    if (!site) _errors.site = "Le est obligatoire";
    if (!description) _errors.description = "Le est obligatoire";
    if (!secteuractivite) _errors.secteuractivite = "Le est obligatoire";
    if (!typeposte) _errors.typeposte = "Le est obligatoire";

    setErrors(_errors);
    if (Object.keys(_errors).length !== 0)
      {toast.error("Remplissez tout les champs!!!")}

    return Object.keys(_errors).length === 0;
  }

      return (
      <>
      <Container className='p-4 text-center'>   
        <h2>Modifier les informations de l'entreprise</h2> 
      </Container>
      <Container className='pb-4'>
        <Row>
          <Col>
            <Form>
              
            <Form.Label><h4>Identification</h4></Form.Label>
              <Form.Group as={Row} controlId="entreprise" className='border border-black py-3'>
                <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="nomentreprise">
                  <Form.Label>nomentreprise</Form.Label>
                  <Form.Control type="text" placeholder="Entrer le nomentreprise" defaultValue={donneesRecues.nomentreprise}  isInvalid={!!Errors.nomentreprise} required />
                  <Form.Control.Feedback type='invalid'>
                    {Errors.nomentreprise}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="prenomcontact">
                    <Form.Label>prenomcontact</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le prenomcontact" defaultValue={donneesRecues.prenomcontact} isInvalid={!!Errors.prenomcontact} required />
                    <Form.Control.Feedback type='invalid'>
                    {Errors.prenomcontact}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="nomcontact">
                    <Form.Label>nomcontact</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le nomcontact" defaultValue={donneesRecues.nomcontact} isInvalid={!!Errors.nomcontact} required />
                    <Form.Control.Feedback type='invalid'>
                    {Errors.nomcontact}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="courriel">
                    <Form.Label>courriel</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le courriel" defaultValue={donneesRecues.courriel} isInvalid={!!Errors.courriel} required />
                    <Form.Control.Feedback type='invalid'>
                    {Errors.courriel}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="telephone">
                    <Form.Label>telephone</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le telephone" defaultValue={donneesRecues.telephone} isInvalid={!!Errors.telephone} required />
                    <Form.Control.Feedback type='invalid'>
                    {Errors.telephone}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="adresse">
                    <Form.Label>adresse</Form.Label>
                    <Form.Control type="text" placeholder="Entrer l'adresse" defaultValue={donneesRecues.adresse} isInvalid={!!Errors.adresse} required />
                    <Form.Control.Feedback type='invalid'>
                    {Errors.adresse}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="ville">
                    <Form.Label>ville</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le ville" defaultValue={donneesRecues.ville} isInvalid={!!Errors.ville} required />
                    <Form.Control.Feedback type='invalid'>
                    {Errors.ville}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="site">
                    <Form.Label>site</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le site" defaultValue={donneesRecues.site} isInvalid={!!Errors.site} required />
                    <Form.Control.Feedback type='invalid'>
                    {Errors.site}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="description">
                    <Form.Label>description</Form.Label>
                    <Form.Control type="text" placeholder="Entrer la description" defaultValue={donneesRecues.description} isInvalid={!!Errors.description} required />
                    <Form.Control.Feedback type='invalid'>
                    {Errors.description}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="secteuractivite">
                    <Form.Label>secteuractivite</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le secteuractivite" defaultValue={donneesRecues.secteuractivite} isInvalid={!!Errors.secteuractivite} required />
                    <Form.Control.Feedback type='invalid'>
                    {Errors.secteuractivite}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="typeposte">
                    <Form.Label>typeposte</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le typeposte" defaultValue={donneesRecues.typeposte} isInvalid={!!Errors.typeposte} required />
                    <Form.Control.Feedback type='invalid'>
                    {Errors.typeposte}
                    </Form.Control.Feedback>
                  </Form.Group>

              </Form.Group>
            <Row>
              <Col xl="4" lg="4" md="4" sm="12" xs="12">
                <Button variant="primary" type="submit" onClick={handleEdit} to={"/Entreprises"}>
                    Enregistrer
                </Button>
            </Col>
              <Col xl="4" lg="4" md="4" sm="12" xs="12">
                    <Link className='links mx-2  btn btn-danger' to={"/Entreprise"}>
                          <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-return-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
                          </svg> Retour a la liste des Entreprises
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

  export default FormEditEntreprise;