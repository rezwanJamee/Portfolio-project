import React from "react";
import author from "../me.jpg";
import ProgressBar from "@ramonak/react-progress-bar";

const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={author} alt="author..." />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About</h1>
                    <h4>Let me introduce myself.</h4>
                    <p>
                        I am a backend software developer interested in cloud and emerging technologies. Due to personal interest, I have already acquired my first AWS certificate toward a cloud practitioner and hoping to get more soon.
                    </p>
                    <p> 
                    I am also actively trying to update myself and usually on a hunt for new skills related to IT and cloud technologies.
                    </p>
                    
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-xm-12">
                            <div className="column1">
                                <h2>Profile </h2>
                                <div class="info-list">
                                    <h5>Fullname:</h5>
                                    <p>Rifat Rezwan Jamee</p>
                                    
                                    <h5>Address:</h5>
                                    <p>Box Hill, Melbourne, VIC</p>
                                    
                                    <h5>Phone:</h5>
                                    <p>(+61) 424-516-306</p>
                                    
                                    
                                    <h5>Linkedin:</h5>
                                    <p>www.linkedin.com/in/rezwanjamee</p>
                                    
                                    <h5>Email:</h5>
                                    <p>Rezwan.jamee@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xm-12">                  
                            <div className="column2">
                                <h2>Skills </h2>
                                <div className="skills-list">
                                    <h5>JavaScript</h5>
                                    <div className="progressbar">
                                    <ProgressBar completed={85} height={"12px"} bgcolor={"#1F2833"} borderRadius={"2px"}/>
                                    </div>
                                    <h5>Java</h5>
                                    <div className="progressbar">
                                    <ProgressBar completed={70} height={"12px"} bgcolor={"#1F2833"} borderRadius={"2px"}/>
                                    </div>
                                    <h5>AWS</h5>
                                    <div className="progressbar">
                                    <ProgressBar completed={45} height={"12px"} bgcolor={"#1F2833"} borderRadius={"2px"}/>
                                    </div>
                                    <h5>API development</h5>
                                    <div className="progressbar">
                                    <ProgressBar completed={55} height={"12px"} bgcolor={"#1F2833"} borderRadius={"2px"}/>
                                    </div>
                                    <h5>Microservices</h5>
                                    <div className="progressbar">
                                    <ProgressBar completed={40} height={"12px"} bgcolor={"#1F2833"} borderRadius={"2px"}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
