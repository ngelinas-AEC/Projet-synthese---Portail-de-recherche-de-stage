// <!-- Accueil.js -->
// <!-- Projet synthèse en développement WEB -->
// <!-- Nico Gelinas -->


import React from "react";
import '../styles/accueil.sass';
import { render } from 'react-dom';

import card1 from "../img/screen1_img7.png";
import card2 from "../img/screen1_img8.png";
import card3 from "../img/screen1_img9.png";
import pub from "../img/screen1_img6.png";

import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardColumns } from 'react-bootstrap';

function CardDisplay() {
  return (
    <CardColumns>
      <Card>
            <Card.Img variant="top" src={card3} />
            <Card.Body>
              <Card.Title style={{ textAlign: 'center' }}>FORCES AVENIR</Card.Title>
              <Card.Text style={{ textAlign: 'center' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                  tempor incididunt ut labore et dolore magna aliqua. Nec tincidunt praesent 
                  semper feugiat nibh. Mattis nunc sed blandit libero volutpat. Turpis egestas 
                  integer eget aliquet nibh. Lobortis scelerisque fermentum dui faucibus in ornare 
                  quam viverra. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus et.
              </Card.Text>
            </Card.Body>
            </Card>

            <Card>
            <Card.Img variant="top" src={card2} />
            <Card.Body>
              <Card.Title style={{ textAlign: 'center' }}>CENTRAIDE</Card.Title>
              <Card.Text style={{ textAlign: 'center' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                  tempor incididunt ut labore et dolore magna aliqua. Nec tincidunt praesent 
                  semper feugiat nibh. Mattis nunc sed blandit libero volutpat. Turpis egestas 
                  integer eget aliquet nibh. Lobortis scelerisque fermentum dui faucibus in ornare 
                  quam viverra. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus et.
              </Card.Text>
            </Card.Body>
            </Card>

            <Card>
            <Card.Img variant="top" src={card1} />
            <Card.Body>
              <Card.Title style={{ textAlign: 'center' }}>FONDATION RÉNO-JOUETS</Card.Title>
              <Card.Text style={{ textAlign: 'center' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                  tempor incididunt ut labore et dolore magna aliqua. Nec tincidunt praesent 
                  semper feugiat nibh. Mattis nunc sed blandit libero volutpat. Turpis egestas 
                  integer eget aliquet nibh. Lobortis scelerisque fermentum dui faucibus in ornare 
                  quam viverra. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus et.
              </Card.Text>
            </Card.Body>
            </Card>
    </CardColumns>
  );
}

function CardPrimaryDisplay() {
  return (
    <Card bg='primary' text="white">
    <Card.Body style={{
width: '100%',
}}>
      <Card.Title style={{ textAlign: 'left', textColor: 'white' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Card.Title>
      <Card.Text style={{ textAlign: 'left' }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Nec tincidunt praesent 
          semper feugiat nibh. Mattis nunc sed blandit libero volutpat. Turpis egestas 
          integer eget aliquet nibh. Lobortis scelerisque fermentum dui faucibus in ornare 
          quam viverra. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus et.
          Diam quis enim lobortis scelerisque fermentum dui faucibus in. In dictum non consectetur a. 
          Tristique risus nec feugiat in fermentum posuere urna. Nunc mi ipsum faucibus vitae aliquet nec. 
          Semper viverra nam libero justo. Eu non diam phasellus vestibulum.
      </Card.Text>
    </Card.Body>
</Card>
    );
  }

  

  function CardPubDisplay() {
    return (
      <Card bg='primary' text="white">
       <Card.Img variant="top" src={pub} />
  </Card>
      );
    }
export class Accueil extends React.Component {
  render() {
    return (
  <>    
    <div className='main-content '>
    
    <CardDisplay /> 
    <CardPrimaryDisplay />
    <CardPubDisplay />
    </div>
  </>
    );
  }
}





  

  