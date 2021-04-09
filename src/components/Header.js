// <!-- Header.js -->
// <!-- Projet synthèse en développement WEB -->
// <!-- Nico Gelinas -->

import React from "react"; 
import {NavLink} from 'react-router-dom' 
import {Link} from 'react-router-dom' 
import '../styles/header.sass';
import estage from "../img/screen1_img3.png";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class Header extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {clicked: false}
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ clicked: !this.state.clicked})
    }

render() 
{ 
    const MenuItems = [       
        {
            title: 'Accueil',
            url:'/Accueil',
            cName: 'nav-links'
        },
        {
            title: 'Candidats',
            url:'/Candidat',
            cName: 'nav-links'
        },
        {
            title: 'Entreprises',
            url:'/Entreprise',
            cName: 'nav-links'
        },
        {
            title: 'Secteurs',
            url:'/Secteur',
            cName: 'nav-links'
        },
        {
            title: 'Offres',
            url:'/Offre',
            cName: 'nav-links'
        },
        {
            title: 'Demandes',
            url:'/Demande',
            cName: 'nav-links'
        },
        {
            title: 'Utilisateurs',
            url:'/Utilisateur',
            cName: 'nav-links'
        }         
    ]    

return ( 
    <div>
        <nav className='NavbarItems'>
            <Row>
                <Col xl="4" lg="3" md="3" sm="3" xs="3" >
                    <img className="imageestage" src={estage}/> 
                </Col>
                <Col xl="2" lg="3" md="3" sm="3" xs="3" >
                    <NavLink className="button" type="submit" onClick={this.handleClick} to="/offre">
                        Trouvez votre stage
                    </NavLink>
                </Col>
                <Col xl="2" lg="3" md="3" sm="3" xs="3" >
                    <NavLink className="button" type="submit" onClick={this.handleClick} to="/demande">
                        Trouvez votre futur stagiaire
                    </NavLink>
                </Col>
                <Col xl="2" lg="3" md="3" sm="3" xs="3" >
                </Col>
                <Col xl="2" lg="3" md="3" sm="3" xs="3" >
                    <NavLink className="buttonconnexion" type="submit" onClick={this.handleClick} to="/login">
                        Connexion
                    </NavLink>
                    <NavLink className="buttoninscription" type="submit" onClick={this.handleClick} to="/utilisateur">
                        Inscription
                    </NavLink>
                </Col>
            </Row>

            <Row>
                <Col xl="1" lg="1" md="1" sm="1" xs="1" >
                </Col>
                <Col xl="2" lg="2" md="2" sm="2" xs="2" >
                    <Link exact='true' to="/Accueil">
                        <h1 className='navbar-logo'> À Propos</h1>
                    </Link>
                </Col>
                <Col xl="9" lg="9" md="9" sm="9" xs="9" >

                <ul className={ this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                                
                                {MenuItems.map((item,index)=>{
                                    return(
                                        <NavLink key={index} className={item.cName} to={item.url} onClick={this.handleClick}>
                                        {item.title}    
                                        </NavLink>
                                    )
                                })}
                            <button className='menu-buttonpwa' variant="primary" size="lg"  id="butInstall" hidden> Installer la PWA </button> 
                </ul>
                </Col>
            </Row>

        </nav>
    </div>
    );
    }
}
