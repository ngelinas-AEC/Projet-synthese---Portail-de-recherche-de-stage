// <!-- FormEditUtilisateur.js -->
// <!-- Projet synthèse en développement WEB -->
// <!-- Nico Gelinas -->

import React , {useState , useEffect} from "react";
import { Form, Button,Image,Container,Row,Col } from "react-bootstrap";
import {toast} from "react-toastify"
import {APIUSER} from "../../Api_constante";
import { Link } from "react-router-dom";

function FormEditUtilisateur(props){
  const [donneesRecues , setDonneesRecues] = useState({nom: '', prenom: '', entreprise: '', nomentreprise: '', adresse: '', ville: '', region: ''
  , logo: '', courriel: '', telephone: '', site: '', cv: '', motdepasse: '', actif: '', supprime: '', valide: '', niveauacces: ''});
  const [UtilisateurID ] = useState(props.location.search.substring(4,props.location.search.length));
  const [Errors , setErrors] = useState("");

  useEffect(() => {
    getUtilisateur();
  },[]); 

  async function getUtilisateur() {
    try {
      const response = await fetch( APIUSER + UtilisateurID);
      const reponseDeApi = await response.json();
      setDonneesRecues(reponseDeApi);
      if (!response.ok) {
        throw Error(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function editUtilisateur(nom, prenom, entreprise, nomentreprise, adresse, ville, region, logo, courriel, telephone, site, cv, motdepasse, actif, supprime, valide, niveauacces) { 
    try{ 
      const response = await fetch( APIUSER + UtilisateurID, { 
        method:'PUT', 
        headers: {'Content-Type': 'application/json'  }, 
        body:JSON.stringify({
          nom: nom,
          prenom: prenom,
          entreprise: entreprise,
          nomentreprise: nomentreprise,
          adresse: adresse,
          ville: ville,
          region: region,
          logo: logo,
          courriel: courriel,
          telephone: telephone,
          site: site,
          cv: cv,
          motdepasse: motdepasse,
          actif: actif,
          supprime: supprime,
          valide: valide,
          niveauacces: niveauacces
          })  
      }); 
      if(response.ok){ 
        props.history.push("/Utilisateur");
        toast.info("Fiche du Utilisateur "+ nom+" modifié!!");

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
    const entreprise = document.getElementById('entreprise').value;
    const nomentreprise = document.getElementById('nomentreprise').value;
    const adresse = document.getElementById('adresse').value;
    const ville = document.getElementById('ville').value;
    const region = document.getElementById('region').value;
    const logo = document.getElementById('logo').value;
    const courriel = document.getElementById('courriel').value;
    const telephone = document.getElementById('telephone').value;
    const site = document.getElementById('site').value;
    const cv = document.getElementById('cv').value;
    const motdepasse = document.getElementById('motdepasse').value;
    const actif = document.getElementById('actif').value;
    const supprime = document.getElementById('supprime').value;
    const valide = document.getElementById('valide').value;
    const niveauacces = document.getElementById('niveauacces').value; 

    if(!formIsValid(nom, prenom, entreprise, nomentreprise, adresse, ville, region, logo, courriel, telephone, site, cv, motdepasse, actif, supprime, valide, niveauacces)) return;

    editUtilisateur (nom, prenom, entreprise, nomentreprise, adresse, ville, region, logo, courriel, telephone, site, cv, motdepasse, actif, supprime, valide, niveauacces);
  }

  function formIsValid(nom, prenom, entreprise, nomentreprise, adresse, ville, region, logo, courriel, telephone, site, cv, motdepasse, actif, supprime, valide, niveauacces){
    const _errors = {};
   
    if (!nom) _errors.nom = "Le est obligatoire";
    if (!prenom) _errors.prenom = "Le est obligatoire";
    if (!entreprise) _errors.entreprise = "Le est obligatoire";
    if (!nomentreprise) _errors.nomentreprise = "Le est obligatoire";
    if (!adresse) _errors.adresse = "Le est obligatoire";
    if (!ville) _errors.ville = "Le est obligatoire";
    if (!region) _errors.region = "Le est obligatoire";
    if (!logo) _errors.logo = "Le est obligatoire";
    if (!courriel) _errors.courriel = "Le est obligatoire";
    if (!telephone) _errors.telephone = "Le est obligatoire";
    if (!site) _errors.site = "Le est obligatoire";
    if (!cv) _errors.cv = "Le est obligatoire";
    if (!motdepasse) _errors.motdepasse = "Le est obligatoire";
    if (!actif) _errors.actif = "Le est obligatoire";
    if (!supprime) _errors.supprime = "Le est obligatoire";
    if (!valide) _errors.valide = "Le est obligatoire";
    if (!niveauacces) _errors.niveauacces = "Le est obligatoire";

    setErrors(_errors);
    if (Object.keys(_errors).length !== 0)
      {toast.error("Remplissez tout les champs!!!")}

    return Object.keys(_errors).length === 0;
  }

      return (
      <>
      <Container className='p-4 text-center'>   
        <h2>Modifier les informations du Utilisateur</h2> 
      </Container>
      <Container className='pb-4'>
        <Row>
          <Col>
            <Form>
              
            <Form.Label><h4>Identification</h4></Form.Label>
              <Form.Group as={Row} controlId="utilisateur" className='border border-black py-3'>

                <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="nom">
                  <Form.Label>nom</Form.Label>
                  <Form.Control type="text" placeholder="Entrer le nom" defaultValue={donneesRecues.nom}  isInvalid={!!Errors.nom} required />
                  <Form.Control.Feedback type='invalid'>
                    {Errors.nom}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="prenom">
                  <Form.Label>prenom</Form.Label>
                  <Form.Control type="text" placeholder="Entrer le prenom" defaultValue={donneesRecues.prenom}  isInvalid={!!Errors.prenom} required />
                  <Form.Control.Feedback type='invalid'>
                    {Errors.prenom}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="entreprise">
                  <Form.Label>entreprise</Form.Label>
                  <Form.Control type="text" placeholder="Entrer le entreprise" defaultValue={donneesRecues.entreprise}  isInvalid={!!Errors.entreprise} required />
                  <Form.Control.Feedback type='invalid'>
                    {Errors.entreprise}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="nomentreprise">
                  <Form.Label>nomentreprise</Form.Label>
                  <Form.Control type="text" placeholder="Entrer le nomentreprise" defaultValue={donneesRecues.nomentreprise}  isInvalid={!!Errors.nomentreprise} required />
                  <Form.Control.Feedback type='invalid'>
                    {Errors.nomentreprise}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="adresse">
                  <Form.Label>adresse</Form.Label>
                  <Form.Control type="text" placeholder="Entrer le adresse" defaultValue={donneesRecues.adresse}  isInvalid={!!Errors.adresse} required />
                  <Form.Control.Feedback type='invalid'>
                    {Errors.adresse}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="ville">
                  <Form.Label>ville</Form.Label>
                  <Form.Control type="text" placeholder="Entrer le ville" defaultValue={donneesRecues.ville}  isInvalid={!!Errors.ville} required />
                  <Form.Control.Feedback type='invalid'>
                    {Errors.ville}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="region">
                  <Form.Label>region</Form.Label>
                  <Form.Control type="text" placeholder="Entrer le region" defaultValue={donneesRecues.region}  isInvalid={!!Errors.region} required />
                  <Form.Control.Feedback type='invalid'>
                    {Errors.region}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="logo">
                  <Form.Label>logo</Form.Label>
                  <Form.Control type="text" placeholder="Entrer le logo" defaultValue={donneesRecues.logo}  isInvalid={!!Errors.logo} required />
                  <Form.Control.Feedback type='invalid'>
                    {Errors.logo}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="courriel">
                  <Form.Label>courriel</Form.Label>
                  <Form.Control type="text" placeholder="Entrer le courriel" defaultValue={donneesRecues.courriel}  isInvalid={!!Errors.courriel} required />
                  <Form.Control.Feedback type='invalid'>
                    {Errors.courriel}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="telephone">
                  <Form.Label>telephone</Form.Label>
                  <Form.Control type="text" placeholder="Entrer le telephone" defaultValue={donneesRecues.telephone}  isInvalid={!!Errors.telephone} required />
                  <Form.Control.Feedback type='invalid'>
                    {Errors.telephone}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="site">
                  <Form.Label>site</Form.Label>
                  <Form.Control type="text" placeholder="Entrer le site" defaultValue={donneesRecues.site}  isInvalid={!!Errors.site} required />
                  <Form.Control.Feedback type='invalid'>
                    {Errors.site}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="cv">
                  <Form.Label>cv</Form.Label>
                  <Form.Control type="text" placeholder="Entrer le cv" defaultValue={donneesRecues.cv}  isInvalid={!!Errors.cv} required />
                  <Form.Control.Feedback type='invalid'>
                    {Errors.cv}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="motdepasse">
                  <Form.Label>motdepasse</Form.Label>
                  <Form.Control type="text" placeholder="Entrer le motdepasse" defaultValue={donneesRecues.motdepasse}  isInvalid={!!Errors.motdepasse} required />
                  <Form.Control.Feedback type='invalid'>
                    {Errors.motdepasse}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="actif">
                  <Form.Label>actif</Form.Label>
                  <Form.Control type="text" placeholder="Entrer le actif" defaultValue={donneesRecues.actif}  isInvalid={!!Errors.actif} required />
                  <Form.Control.Feedback type='invalid'>
                    {Errors.actif}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="supprime">
                  <Form.Label>supprime</Form.Label>
                  <Form.Control type="text" placeholder="Entrer le cv" defaultValue={donneesRecues.supprime}  isInvalid={!!Errors.supprime} required />
                  <Form.Control.Feedback type='invalid'>
                    {Errors.supprime}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="valide">
                  <Form.Label>valide</Form.Label>
                  <Form.Control type="text" placeholder="Entrer le valide" defaultValue={donneesRecues.valide}  isInvalid={!!Errors.valide} required />
                  <Form.Control.Feedback type='invalid'>
                    {Errors.valide}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="niveauacces">
                  <Form.Label>niveauacces</Form.Label>
                  <Form.Control type="text" placeholder="Entrer le cv" defaultValue={donneesRecues.niveauacces}  isInvalid={!!Errors.niveauacces} required />
                  <Form.Control.Feedback type='invalid'>
                    {Errors.niveauacces}
                  </Form.Control.Feedback>
                </Form.Group>

              </Form.Group>
            <Row>
              <Col xl="4" lg="4" md="4" sm="12" xs="12">
                <Button variant="primary" type="submit" onClick={handleEdit} to={"/UtilisateurRefresh"}>
                    Enregistrer
                </Button>
            </Col>
              <Col xl="4" lg="4" md="4" sm="12" xs="12">
                    <Link className='links mx-2  btn btn-danger' to={"/Utilisateur"}>
                          <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-return-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
                          </svg> Retour a la liste des Utilisateurs
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

  export default FormEditUtilisateur;