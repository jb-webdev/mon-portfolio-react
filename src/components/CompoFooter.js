/**
 * @author j.boero
 * Projet : Portfolio
 * * Novembre 2020
 * 
 * Compo Footer
 * 
 */
import React from 'react'
import '../sass/CompoFooter.scss';

export default function CompoFooter() {
    return (
        <div>
            <footer id="footer">
				<div className="container">
					<ul className="icons">
						<li><a href="https://github.com/jb-webdev" target="_blank" rel="noopener noreferrer"><span className="fab fa-github"></span></a></li>
						<li><a href="https://www.linkedin.com/in/jean-jacques-boero/" target="_blank" rel="noopener noreferrer"><span className="fab fa-linkedin-in"></span></a></li>
						<li><a href="mailto:j.boero@icloud.com" target="_blank" rel="noopener noreferrer"><span className="fas fa-paper-plane"></span></a></li>
					</ul>
					<ul className="copyright">
						<li>&copy; Jean-Jacques BOERO 2020</li>
					</ul>
				</div>
			</footer>
            
        </div>
    )
}
