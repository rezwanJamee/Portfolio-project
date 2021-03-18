import React from "react";
import logo from "../logo.png";
import {Link} from 'react-scroll';
//Import React font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..." /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <FontAwesomeIcon icon={faBars} style={{ color: '#fff'}}/>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link smooth={true} to="home" className="nav-link" href="#">Home <span class="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link smooth={true} to="about" offset={-50} className="nav-link" href="#">About</Link>
                </li>
                <li className="nav-item">
                  <Link smooth={true} to="skills" offset={-50}  className="nav-link" href="#">Skills</Link>
                </li>
                <li className="nav-item">
                  <Link smooth={true} to="experience" offset={-50} className="nav-link" href="#">experience</Link>
                </li>
                <li className="nav-item">
                  <Link smooth={true} to="portfolio" offset={-50} className="nav-link" href="#">portfolio</Link>
                </li>
                <li className="nav-item">
                  <Link smooth={true} to="contacts"  className="nav-link" href="#">contacts</Link>
                </li>
              </ul>    
            </div>
    </div>
</nav>
    )
}

export default Navbar
