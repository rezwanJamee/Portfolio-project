import React from "react"
import Typed from "react-typed";
import {Link} from 'react-scroll';

import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF,
    faTwitter,
    faGithub,
    faLinkedinIn
} from "@fortawesome/free-brands-svg-icons"

const Header = () => {
    return (
        <div id="home" className="header-wraper">
            <div className="main-info">
                <h3>HELLO, WORLD.</h3>
                <h1>I'm Rifat Jamee.</h1> 
                <Typed 
                    className="typed-text"
                    strings={["Software Developer", "Full-Stack Developer", "Backend Developer"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <div className="btn-main-offer">
                    <Link smooth={true} to="about" offset={-110} className="nav-link" href="#">More About Me <span class="sr-only">(current)</span></Link>
                </div>  

                <div className="social-container">
                    <a href="https://www.facebook.com/rezwan.jamee" className="facebook social">
                        <FontAwesomeIcon icon={faFacebookF} size="2x" />
                    </a>
                    <a href="https://twitter.com/Rezwan962" className="twitter social">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                    <a href="https://github.com/RezwanJamee" className="github social">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a href="https://www.linkedin.com/in/rezwanjamee/" className="linkedin social">
                        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                    </a>
                </div>
                
            </div>
        </div>
    )
}

export default Header
