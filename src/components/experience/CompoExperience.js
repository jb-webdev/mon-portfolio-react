/**
 * @author j.boero
 * Projet : Portfolio
 * * Novembre 2020
 * 
 * Compo Experience
 * 
 */
import React from 'react'
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Tilt from 'react-tilt'
import OPENCLASSROOMS from "../../assets/img/experience/openclassrooms.svg";
import "./CompoExperience.css";

export default function CompoExperience() {
    return (
        <div id="experience">
            <Jumbotron className="jumbo-style">
            <h2 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h2>
                <Container>
                    <Tilt options={{ max: 25 }}>
                        <Card>
                            <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                                <Card.Img variant="top" className="img-resize" src={OPENCLASSROOMS} alt="Accenture logo" />
                            </Card.Header>
                            <Card.Body className="d-flex justify-content-center flex-column">
                                <div>
                                    <Card.Title className="text-center styleTitle">Developpeur web</Card.Title>
                                </div>
                                <div>
                                    <Card.Text className="text-center style">  
                                        <strong>Technologie : </strong> html, css, Javascript, React JS, vueJs, My-SQL, mongoDB
                                        <br />
                                        <strong>Durée :</strong> Janvier 2020 - Octobre 2020
                                        <br/>
                                        <strong>Description</strong>
                                        <ul className="text-left">
                                            <li><strong>Optimisation SEO :</strong> Optimisation d'un site web existant et mise en place des bonnes pratique SEO.</li>
                                            <li><strong>Frontend :</strong> Créer une application e-commerce avec Javascript, utiliser un API. </li>
                                            <li><strong>Backend noSQL :</strong> Création d'API, en utilisant Node.js, MongoDB et Express tout en respectant les recommandation de l'OWASP.</li>
                                            <li><strong>Backend SQL :</strong> Créer et manipuler une base de données MySQL.</li>
                                            <li><strong>Ce portfolio :</strong> Crée un portfolio avec React.js hors formation.</li>
                                        </ul> 
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </Tilt>
                </Container>
            </Jumbotron>
        </div>
    )
}
