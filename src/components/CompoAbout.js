/**
 * @author j.boero
 * Projet : Portfolio
 * * Novembre 2020
 * 
 * Compo About
 * 
 */
import React from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image';
import Profile from '../assets/img/profile/profile.png';
import Button from "react-bootstrap/Button";
import "../sass/CompoAbout.scss";


export default function CompoAbout() {
    return (
        <section id="about" className="wrapper style1">
            <h2 className="h2About">A PROPOS DE MOI</h2>
		    <Container className="container">
				<Row className="pt-3 pb-5 align-items-center">
                    <Col className="boxeProfile" xs={12} md={6}>
                        <Row className="justify-content-center mb-2 mr-2">
                            <Image className="profile center" alt="photo de mon profile" src={Profile}fluid />
                        </Row>
                    </Col>
                    <Col className="d-flex justify-content-center flex-wrap">
                        <h3>Je suis developeur web Javavascript, Node.js, React</h3>
                        <p>En 2020, j'ai terminé avec succès ma fomation de developpeur web avec Openclassrooms. J'ai aquis les compétences nécessaire d'un développeur Web Javascript, React, Express.js, Node.js.</p>
                        <p>Aujourd’hui, mes compétences conjuguées à mon expérience me permettent d’apporter des solutions concrètes en gardant une ouverture d’esprit forte, une volonté d’innover et un sens de l’écoute indispensable pour répondre au mieux aux besoins de vos clients.</p>
                        <div>
                            <a href="https://github.com/jb-webdev" target="_blank" rel="noopener noreferrer">
                                <Button className="m-2" variant="outline-dark">
                                        GitHub
                                </Button>
                            </a>
                        </div>
                        <div>
                            <a href="https://www.linkedin.com/in/jean-jacques-boero/" target="_blank" rel="noopener noreferrer">
                                <Button className="m-2" variant="outline-info">
                                    LinkedIn
                                </Button>
                            </a>
                        </div>                    
                    </Col> 	
				</Row>
			</Container>
		</section>
    )
}
