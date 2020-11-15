/**
 * @author j.boero
 * Projet : Portfolio
 * * Novembre 2020
 * 
 * Compo Header
 * 
 */
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './CompoHeader.css';

export default function CompoHeader() {
    return (
        <div>
            <Navbar collapseOnSelect expand="md" 
                fixed="top"
                variant="dark" 
                className="animate-navbar nav-theme justify-content-between"
                >
            
                <h1 className="h1Nav">Jean-Jacques BOERO</h1>
            
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#banner">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#experience">Experience</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#footer">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar> 
        </div>
    )
}
