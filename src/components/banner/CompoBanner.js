/**
 * @author j.boero
 * Projet : Portfolio
 * * Novembre 2020
 * 
 * Compo Banner
 * 
 */
import React from 'react';
import {Link} from 'react-router-dom';
import './CompoBanner.css';


function CompoBanner() {
    return (
        <div>
            <section id="banner">
				<h1>Jean-Jacques BOERO</h1>
				<p>Developpeur Web JavaScript</p>
				<ul className="actions">
					<li><Link to="#contact" className="button special big">Me contacter</Link></li>
				</ul>
			</section>
        </div>
    )
}

export default CompoBanner;
