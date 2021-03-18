import React from 'react'

const Experience = () => {
    return (
        <div id="experience" className="experience">
            <div className="d-flex justify-content-center my-5">
                <h1>Experience</h1>
            </div>
            <p className="pb-3 text-center">Following is my credentials and experience timeline.</p>
            <div className="container experience-wrapper">
                {/* - */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                    <h3>2020-2021</h3>
                        <p> February - Current</p>
                        <h4>Bachelor of Information Communication Technology</h4>
                        <h5>Swinburne University of Technology</h5>
                        <p>The diploma was a pathway for me to enter the Monash university.</p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2019-2019</h3>
                        <p>February - November</p>
                        <h4>Bachelor of Information Technology</h4>
                        <h5>Monach University</h5>
                        <p>The diploma was a pathway for me to enter the Monash university.</p>
                        </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        
                    <h3>2017-2018</h3>
                        <p>June - September</p>
                        <h4>Diploma of Engineering(IT)</h4>
                        <h5>Monach College</h5>
                        <p>The diploma was a pathway for me to enter the Monash university.</p>
                        </div>
                </div>
                {/* - */}

                
                
            </div>
        </div>
    )
}

export default Experience
