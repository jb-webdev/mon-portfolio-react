/**
 * @author j.boero
 * Projet : Portfolio
 * * Novembre 2020
 * 
 * Compo Projets
 * 
 */
import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';






// skills
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.png";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.png";
// import Image from "react-bootstrap/Image";
import L_HTML5 from "../../assets/img/skills/html5.png";
import L_CSS3 from "../../assets/img/skills/css3.png";
import L_SASS from "../../assets/img/skills/sass.png";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_GIT from "../../assets/img/skills/github-api.svg";
import L_MYSQL from "../../assets/img/skills/mysql.png";
import L_REACT_BOOTSTRAP from "../../assets/img/skills/react-bootstrap.svg";

import './StyleVerticalLine.css';
import './CompoProjects.css';

export default function CompoProjects() {
    return (
        <div id="projects">
            <VerticalTimeline>
                <h2 className="pt-3 text-center font-details-b pb-3">Projets</h2>
                {/* Projet 8 */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Novembre 2020"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Portfolio</h3>
                    <h4 className="vertical-timeline-element-subtitle">Mise en place de mon portfolio</h4>
                    <p>Réalisation de ce portfolio avec React.js</p>
                    <p className="boxSpanLogo" >
                        <span>
                            <img src={L_HTML5} className="imageSpan" alt="logo html" />
                        </span>
                        <span>
                            <img src={L_CSS3} className="imageSpan" alt="logo html" />
                        </span>
                        <span>
                            <img src={L_REACT} className="imageSpan" alt="logo react" />
                        </span>
                        <span>
                            <img src={L_REACT_BOOTSTRAP} className="imageSpan" alt="logo bootstrap" />
                        </span>
                        <span>
                            <img src={L_JAVASCRIPT} className="imageSpan" alt="logo javascript" />
                        </span>
                        <span>
                            <img src={L_NODE_JS} className="imageSpan" alt="logo node.js" />
                        </span>
                        <span>
                            <img src={L_GIT} className="imageSpan" alt="Github" />
                        </span>
                    </p>
                    
                </VerticalTimelineElement>
                {/* Projet 7 */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Oct 2020"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Réseau social d'entreprise</h3>
                    <h4 className="vertical-timeline-element-subtitle">Frontend & Backend</h4>
                    <p> Création de la BDD en MySql, Realiser et utiliser une API Express, ainsi que le Framework React.Js côte.</p>
                    <p>J'ai acquis les competences suivantes :  
                        Authentifier un utilisateur et maintenir sa session; 
                        Implémenter un stockage de données sécurisé en utilisant SQL;
                        Gérer un stockage de données à l'aide de SQL;
                        Personnaliser le contenu envoyé à un client web.
                    </p>
                    <p className="boxSpanLogo" >
                        <span>
                            <img src={L_REACT} className="imageSpan" alt="logo react" />
                        </span>
                        <span>
                            <img src={L_BOOTSTRAP4} className="imageSpan" alt="logo bootstrap" />
                        </span>
                        <span>
                            <img src={L_JAVASCRIPT} className="imageSpan" alt="logo javascript" />
                        </span>
                        <span>
                            <img src={L_NODE_JS} className="imageSpan" alt="logo node.js" />
                        </span>
                        <span>
                            <img src={L_MYSQL} className="imageSpan" alt="logo Mysql" />
                        </span>
                        <span>
                            <img src={L_EXPRESS} className="imageSpan" alt="logo Express" />
                        </span>
                        <span>
                            <img src={L_GIT} className="imageSpan" alt="Github" />
                        </span>
                    </p>
                </VerticalTimelineElement>
                {/* Projet 6 */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Sept 2020"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Construction d'une API sécurisée</h3>
                    <h4 className="vertical-timeline-element-subtitle">Backend</h4>
                    <p> Construction d'une Api Express sécurisée, en utilisant Node.Js, Express, MongoDb, Postman.</p>
                    <p>J'ai acquis les competences suivantes :  
                        Implémenter un modèle logique de données conformément à la réglementation;
                        Stocker des données de manière sécurisée;
                        Mettre en œuvre des opérations CRUD de manière sécurisée.
                    </p>
                    <p className="boxSpanLogo" >
                        <span>
                            <img src={L_JAVASCRIPT} className="imageSpan" alt="logo javascript" />
                        </span>
                        <span>
                            <img src={L_NODE_JS} className="imageSpan" alt="logo node.js" />
                        </span>
                        <span>
                            <img src={L_MONGODB} className="imageSpan" alt="logo mongoDb" />
                        </span>
                        <span>
                            <img src={L_EXPRESS} className="imageSpan" alt="logo Express" />
                        </span>
                        <span>
                            <img src={L_GIT} className="imageSpan" alt="Github" />
                        </span>
                    </p>
                </VerticalTimelineElement>
                {/* Projet 5 */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Aout 2020"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Construire un site e-commerce</h3>
                    <h4 className="vertical-timeline-element-subtitle">Frontend</h4>
                    <p> Construire le MVP d'une application e-commerce en utilisant que javascript et sans framework.</p>
                    <p>J'ai acquis les competences suivantes :  
                        Valider des données issues de sources externes;
                        Créer un plan de test pour une application;
                        Interagir avec un web service avec JavaScript.
                    </p>
                    <p className="boxSpanLogo" >
                        <span>
                            <img src={L_HTML5} className="imageSpan" alt="logo html" />
                        </span>
                        <span>
                            <img src={L_CSS3} className="imageSpan" alt="logo html" />
                        </span>
                        <span>
                            <img src={L_SASS} className="imageSpan" alt="logo Sass" />
                        </span>
                        <span>
                            <img src={L_JAVASCRIPT} className="imageSpan" alt="logo javascript" />
                        </span>
                        <span>
                            <img src={L_NODE_JS} className="imageSpan" alt="logo node.js" />
                        </span>
                        <span>
                            <img src={L_GIT} className="imageSpan" alt="Github" />
                        </span>
                    </p>
                </VerticalTimelineElement>
                {/* Projet 4 */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Avril 2020"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Optimiser un site web existant</h3>
                    <h4 className="vertical-timeline-element-subtitle">Frontend</h4>
                    <p> Rédaction d'un rapport d'analyse SEO d'un site existant, améliorer et optimiser son code source, redaction d'un rapport d'optimisation avec comparaison des tests avant et après modification.</p>
                    <p>J'ai acquis les competences suivantes :  
                        Assurer l'accessibilité d'un site web.
                        Réaliser une recherche des bonnes pratiques en développement web; 
                        Écrire un code HTML et CSS maintenable; 
                        Optimiser le référencement d'un site web;
                        Optimiser la taille et la vitesse d’un site web. 
                    </p>
                    <p className="boxSpanLogo" >
                        <span>
                            <img src={L_HTML5} className="imageSpan" alt="logo html" />
                        </span>
                        <span>
                            <img src={L_CSS3} className="imageSpan" alt="logo html" />
                        </span>
                        <span>
                            <img src={L_SASS} className="imageSpan" alt="logo Sass" />
                        </span>
                        <span>
                            <img src={L_NODE_JS} className="imageSpan" alt="logo node.js" />
                        </span>
                        <span>
                            <img src={L_GIT} className="imageSpan" alt="Github" />
                        </span>
                    </p>
                </VerticalTimelineElement>
                {/* Projet 3 */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Avril 2020"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Dynamiser une page web avec du css</h3>
                    <h4 className="vertical-timeline-element-subtitle">Frontend</h4>
                    <p> Intégrer une maquette web pour une application mobile d'un restaurant, en utilisant uniquement des effets css, sans framework.</p>
                    <p>J'ai acquis les competences suivantes :  
                        Mettre en œuvre des effets CSS graphiques avancés;
                        Assurer la cohérence graphique d'un site web;
                        Mettre en place une structure de navigation pour un site web.
                    </p>
                    <p className="boxSpanLogo" >
                        <span>
                            <img src={L_HTML5} className="imageSpan" alt="logo html" />
                        </span>
                        <span>
                            <img src={L_CSS3} className="imageSpan" alt="logo html" />
                        </span>
                        <span>
                            <img src={L_SASS} className="imageSpan" alt="logo Sass" />
                        </span>
                        <span>
                            <img src={L_GIT} className="imageSpan" alt="Github" />
                        </span>
                    </p>
                </VerticalTimelineElement>
                {/* Projet 2 */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Mars 2020"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Transformer une maquette en site web</h3>
                    <h4 className="vertical-timeline-element-subtitle">Frontend</h4>
                    <p> Intégrer une maquette web pour une application mobile d'un restaurant, en utilisant uniquement des effets css, sans framework.</p>
                    <p>J'ai acquis les competences suivantes :  
                        Intégrer du contenu conformément à une maquette;
                        Mettre en place son environnement Front-End;
                        Utiliser un système de gestion de versions pour le suivi du projet et son hébergement;
                        Implémenter une interface responsive.
                    </p>
                    <p className="boxSpanLogo" >
                        <span>
                            <img src={L_HTML5} className="imageSpan" alt="logo html" />
                        </span>
                        <span>
                            <img src={L_CSS3} className="imageSpan" alt="logo html" />
                        </span>
                        <span>
                            <img src={L_GIT} className="imageSpan" alt="Github" />
                        </span>
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}
