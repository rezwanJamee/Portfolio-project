import React from 'react';
import {Link} from 'react-scroll';
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    RedditShareButton,
    RedditIcon,
    LinkedinShareButton,
    LinkedinIcon
} from 'react-share';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF,
    faTwitter,
    faGithub,
    faLinkedinIn
} from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div class="row text-center text-xs-center text-sm-left text-md-left">
				<div class="col-xs-12 col-sm-4 col-md-4">
					<h5>Contacts</h5>
					<ul class="list-unstyled quick-links">
						<li>Box hill, Melbourne</li>
						<li>Australia</li>
						<li><a href="tel:0424-516-306">+(61) 424-516-306</a></li>
						<li><a href="mailto:Rezwan.jamee@gmail.com">Rezwan.jamee@gmail.com</a></li>
						<li>
                            <div className="row">
                                <ul class="list-unstyled quick-links pt-1">
                                    <a href="https://www.facebook.com/rezwan.jamee" className="social-footer">
                                        <FontAwesomeIcon icon={faFacebookF} size="2x" />
                                    </a>
                                    <a href="https://twitter.com/Rezwan962" className="social-footer">
                                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                                    </a>
                                    <a href="https://github.com/RezwanJamee" className="social-footer">
                                        <FontAwesomeIcon icon={faGithub} size="2x" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/rezwanjamee/" className="social-footer">
                                        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                                    </a>
                

                                </ul>
                            </div>
                        </li>
					</ul>
				</div>
				<div class="col-xs-12 col-sm-4 col-md-4">
					<h5>Links</h5>
					<ul class="list-unstyled quick-links">
                        <li><Link smooth={true} to="home" offset={-110} className="footer-link" href="#">Home</Link></li>
                        <li><Link smooth={true} to="about" offset={-110} className="footer-link" href="#">About</Link></li>
                        <li><Link smooth={true} to="services" offset={-110} className="footer-link" href="#">Services</Link></li>
                        <li><Link smooth={true} to="experience" offset={-110} className="footer-link" href="#">Experience</Link></li>
                        <li><Link smooth={true} to="portfolio" offset={-110} className="footer-link" href="#">Portfolio</Link></li>
                        <li><Link smooth={true} to="contacts" offset={-110} className="footer-link" href="#">Contacts</Link></li>
					</ul>
				</div>
				<div class="col-xs-12 col-sm-4 col-md-4">
					<h5>Share me</h5>
					    <ul class="list-unstyled quick-links pt-1">
						    <FacebookShareButton
                                url={"https://github.com/RezwanJamee"}
                                quote={"FullStack Developer"}
                                hashtag="#javascript"
                            >
                                <FacebookIcon className="mx-3" size={36} round={true} />
                            </FacebookShareButton>
                            <TwitterShareButton
                                url={"https://github.com/RezwanJamee"}
                                quote={"FullStack Developer"}
                                hashtag="#javascript"
                            >
                                <TwitterIcon className="mx-3" size={36} round={true}/>
                            </TwitterShareButton>
                            <RedditShareButton
                                url={"https://github.com/RezwanJamee"}
                                quote={"FullStack Developer"}
                                hashtag="#javascript"
                            >
                                <RedditIcon className="mx-3" size={36} round={true}/>
                            </RedditShareButton>
                            <LinkedinShareButton
                                url={"https://github.com/RezwanJamee"}
                                quote={"FullStack Developer"}
                                hashtag="#javascript"
                            >
                                <LinkedinIcon className="mx-3" size={36} round={true}/>
                            </LinkedinShareButton>
					    </ul>
				</div>
			</div>
				
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center">
					<p> Copyright&copy;
                            {new Date().getFullYear()}&nbsp; Rifat. All Rights Reserved.</p>
					<p class="h6">Designed by Rifat.</p>
				</div>
			</div>

            </div>            
        </div>
    )
}

export default Footer
