import React from "react"
import Typed from "react-typed";

const Header = () => {
    return (
        <div id="home" className="header-wraper">
            <div className="main-info">
                <h1>Web development and websites promotions</h1> 
                <Typed 
                    className="typed-text"
                    strings={["Web Design", "Web Development", "Backend Development"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#" className="btn-main-offer">Contact me</a>   
            </div>  
        </div>
    )
}

export default Header
