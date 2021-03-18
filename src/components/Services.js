import React from 'react';
import { faDesktop, faFileCode} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'


const Services = () => {
    return (
        <div id="services" className="services">
            <h1 className="py-5">What I do</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <div className="circle">
                                {/* icons here */}
                                <FontAwesomeIcon className="icon" icon={faJsSquare} size="2x" />
                                <FontAwesomeIcon className="icon" icon={faReact} size="2x" />
                                </div>
                                <h3>Web Development</h3>
                                <p> Say something</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <div className="circle">
                                {/* icons here */}
                                <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
                                </div>
                                <h3>Software development</h3>
                                <p> Say something</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <div className="circle">
                                {/* icons here */}
                                <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
                                </div>
                                <h3>Backend development</h3>
                                <p> Say something</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    {/* icons here */}
                                    <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
                                    </div>
                                <h3>API development</h3>
                                <p> Say something</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Services
