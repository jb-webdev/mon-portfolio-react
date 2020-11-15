/**
 * @author j.boero
 * Projet : Portfolio
 * * Novembre 2020
 * 
 * Compo skills
 * 
 */
import React from 'react'
import './CompoSkills.css';
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Skills } from './skillsData';

export default function CompoSkills() {
    return (
        <div className="pt-3 pb-3" id="skills">
            <h2 className="text-center font-details-b pb-4">TECH SKILLS</h2>
            <CardDeck id="boxkills">
                <Row className="d-flex justify-content-around">
                        {/* Frontend */}
                    <Col md={4}>
                        <Card className="focus mt-2 mb-2">
                            <Card.Body>
                                <Card.Title className="text-center card-title">Frontend</Card.Title>
                                <hr />
                                <Card.Text className="card-text d-flex justify-content-start flex-column">
                                    {Skills.frontend.map((skill, index) => (
                                        <span className="p-2" key={'$(skill.skillName$(index)'}>
                                            <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                                <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                                            </a>
                                        </span>
                                    ))}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col> 
                    <Col md={4}>
                        {/* Backend */}
                        <Card className="focus mt-2 mb-2">
                            <Card.Body>
                                <Card.Title className="text-center card-title">Backend</Card.Title>
                                <hr />
                                <Card.Text className="card-text d-flex justify-content-start flex-column">
                                    {Skills.backend.map((skill, index) => (
                                        <span className="p-2" key={index}>
                                            <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                                <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                                            </a>
                                        </span>
                                    ))}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        {/* Hosting Platforms */}
                        <Card className="focus mt-2 mb-2 ">
                            <Card.Body>
                                <Card.Title className="text-center card-title">Hébergement</Card.Title>
                                <hr />
                                <Card.Text className="card-text d-flex justify-content-start flex-column">
                                    {Skills.hostingPlatforms.map((skill, index) => (
                                        <span className="p-2" key={index}>
                                            <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                                <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                                            </a>
                                        </span>
                                    ))}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        {/* Programming Languages */}
                        <Card className="focus mt-2 mb-2">
                            <Card.Body>
                                <Card.Title className="text-center  card-title">Langages</Card.Title>
                                <hr />
                                <Card.Text className="card-text d-flex justify-content-start flex-column">
                                    {Skills.programmingLanguages.map((skill, index) => (
                                        <span className="p-2" key={index}>
                                            <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                                <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                                            </a>
                                        </span>
                                    ))}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        {/* Database */}            
                        <Card className="focus mt-2 mb-2">
                            <Card.Body>
                                <Card.Title className="text-center  card-title">Base de données</Card.Title>
                                <hr />
                                <Card.Text className="card-text d-flex justify-content-start flex-column">
                                    {Skills.databases.map((skill, index) => (
                                        <span className="p-2" key={index}>
                                            <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                                <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                                            </a>
                                        </span>
                                    ))}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        {/* Version Control */}
                        <Card className="focus mt-2 mb-2">
                            <Card.Body>
                                <Card.Title className="text-center  card-title">Contrôle de version</Card.Title>
                                <hr />
                                <Card.Text className="card-text d-flex justify-content-start flex-column">
                                    <span className="p-2">
                                        <a className="text-dark text-decoration-none" href={Skills.versionControl[0].link} target="_blank" rel="noopener noreferrer">
                                            <Image src={Skills.versionControl[0].imgSrc} alt={Skills.versionControl[0].imgAltText} rounded className="image-style m-1"></Image> {Skills.versionControl[0].skillName}
                                        </a>
                                    </span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </CardDeck>
        </div>
    )
}
