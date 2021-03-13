import React from 'react';
import { faDesktop, faFileCode} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Services = () => {
    return (
        <div className="services">
            <h1 className="py-5">My Services</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div className="circle">
                                {/* icons here */}
                                <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
                                </div>
                                <h3>Web design</h3>
                                <p> Say something</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div className="circle">
                                {/* icons here */}
                                <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
                                </div>
                                <h3>Web development</h3>
                                <p> Say something</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-md-3 col-sm-6">
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
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    {/* icons here */}
                                    <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
                                    </div>
                                <h3>Backend development</h3>
                                <p> Say something</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Services
