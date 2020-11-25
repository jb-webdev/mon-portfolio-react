/**
 * @author j.boero
 * Projet : Portfolio
 * * Novembre 2020
 * 
 * Compo Banner
 * 
 */
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import '../sass/CompoBanner.scss';


function CompoBanner() {
    return (
        <div>
            <section id="banner">
				<h1>Jean-Jacques BOERO</h1>
				<p>Developpeur Web JavaScript</p>
				<ul className="actions">
					<li><Nav.Link href="#footer" className="button special big">Me contacter</Nav.Link></li>
				</ul>
			</section>
        </div>
    )
}

export default CompoBanner;
