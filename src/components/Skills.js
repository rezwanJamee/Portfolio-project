import React from 'react'
import { faDesktop, faFileCode, faDatabase} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faJsSquare, 
    faReact,
    faBootstrap,
    faHtml5,
    faCss3Alt,
    faNodeJs,
    faJava,
    faAws,
    faAndroid

} from '@fortawesome/free-brands-svg-icons'

const Skills = () => {
    return (
        <div id="skills" className="skills-wraper">
                <div className="container">
                    <h1 className="pt-3 pb-3">Skills</h1>
                    <h4 className="pb-2">What I can do</h4>

                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <div className="row">
                                <div className="col icon-box">
                                    {/* icons here */}
                                    <FontAwesomeIcon className="icon-js" icon={faJsSquare} size="2x" />
                                    <FontAwesomeIcon className="icon-html" icon={faHtml5} size="2x" />
                                    <FontAwesomeIcon className="icon-css" icon={faCss3Alt} size="2x" />
                                </div>
                                
                                </div>
                                <h4>Web Development</h4>
                                <p> I can build website using React JS, Bootstrap, JavaScript, HTML, CSS.</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <div className="icon-box">
                                {/* icons here */}
                                <FontAwesomeIcon className="icon-java" icon={faJava} size="2x" />
                                </div>
                                <h4>Software development</h4>
                                <p> Say something</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <div className="icon-box">
                                {/* icons here */}
                                <FontAwesomeIcon className="icon-nodejs" icon={faNodeJs} size="2x" />
                                </div>
                                <h4>Backend development</h4>
                                <p> Say something</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="icon-box">
                                    {/* icons here */}
                                    <FontAwesomeIcon className="icon-code" icon={faFileCode} size="2x" />
                                    </div>
                                <h4>API development</h4>
                                <p> Say something</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <div className="row">
                                <div className="col icon-box">
                                    {/* icons here */}
                                    <FontAwesomeIcon className="icon-react" icon={faReact} size="2x" />
                                    <FontAwesomeIcon className="icon-bootstrap" icon={faBootstrap} size="2x" />
                                    <FontAwesomeIcon className="icon-html" icon={faHtml5} size="2x" />
                                    <FontAwesomeIcon className="icon-css" icon={faCss3Alt} size="2x" />
                                </div>
                                
                                </div>
                                <h4>Frontend Development</h4>
                                <p> I can build website using React JS, Bootstrap, JavaScript, HTML, CSS.</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <div className="icon-box">
                                {/* icons here */}
                                <FontAwesomeIcon className="icon-android" icon={faAndroid} size="2x" />
                                </div>
                                <h4>Mobile development</h4>
                                <p> Say something</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <div className="icon-box">
                                {/* icons here */}
                                <FontAwesomeIcon className="icon-db" icon={faDatabase} size="2x" />
                                </div>
                                <h4>Database development</h4>
                                <p> Say something</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="icon-box">
                                    {/* icons here */}
                                    <FontAwesomeIcon className="icon-aws" icon={faAws} size="2x" />
                                    </div>
                                <h4>Cloud development</h4>
                                <p> I am activly learning cloud technologies and comfortable working with AWS.</p>
                            </div>
                        </div>
                    </div>

            </div>
        </div>
    )
}

export default Skills
