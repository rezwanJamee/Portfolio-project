import React from 'react';
import netflix from '../images/netflix.png';
import cityGuide from '../images/city-guide-app.png';
import portfolio from '../images/portfolio.png';
import taskManager from '../images/task-manager.png';
//Font Awesome
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//React Popupbox
import {PopupboxManager, PopupboxContainer} from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css";  


const Portfolio = () => {

    // First project: Netflix
    const openPopupboxNetflix = () => {
        const content = (
            <>
            <img className="portfolio-image-poppbox" src={netflix} alt="Netflix clone project..." />
            <p>Pop up screen detail here for netflix.</p>
            <b>GitHub: </b><a className="hyper-link" onClick={() => window.open("https://github.com/RezwanJamee")}>https://github.com/RezwanJamee</a>
            </>
        )
        PopupboxManager.open({content});
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                text: "Project 1 title",
              },
            },
          });
    }

    const popupboxConfigNetflix = {
        titleBar:{
            enable: true
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // Second project: CityGuide App
    const openPopupboxCityGuide = () => {
        const content = (
            <>
            <img className="portfolio-image-poppbox" src={cityGuide} alt="City Guide clone project..." />
            <p>Pop up screen detail here for cityGuide.</p>
            <b>GitHub: </b><a className="hyper-link" onClick={() => window.open("https://github.com/RezwanJamee")}>https://github.com/RezwanJamee</a>
            </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigCItyGuide = {
        titleBar:{
            enable: true,
            text: "City Guide clone project."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // Third project: Portfolio Project
    const openPopupboxPortfolio = () => {
        const content = (
            <>
            <img className="portfolio-image-poppbox" src={portfolio} alt="Portfolio project..." />
            <p>Pop up screen detail here for Portfolio.</p>
            <b>GitHub: </b><a className="hyper-link" onClick={() => window.open("https://github.com/RezwanJamee")}>https://github.com/RezwanJamee</a>
            </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigPortfolio = {
        titleBar:{
            enable: true,
            text: "Portfolio project."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // Fourth project: Task manager Project
    const openPopupboxTaskManager = () => {
        const content = (
            <>
            <img className="portfolio-image-poppbox" src={taskManager} alt="Task manager project..." />
            <p>Pop up screen detail here for Task manager.</p>
            <b>GitHub: </b><a className="hyper-link" onClick={() => window.open("https://github.com/RezwanJamee")}>https://github.com/RezwanJamee</a>
            </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigTaskManager = {
        titleBar:{
            enable: true,
            text: "Task Manager project."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }




    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                {/* - */}
                <div className="image-box-wrapper row justify-content center">
                    <div className="portfolio-image-box" onClick={openPopupboxNetflix}>
                        <img className="portfolio-image" src={netflix} alt="Netflix Clone Project" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxCityGuide}>
                        <img className="portfolio-image" src={cityGuide} alt="Netflix Clone Project" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxPortfolio}>
                        <img className="portfolio-image" src={portfolio} alt="Netflix Clone Project" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxTaskManager}>
                        <img className="portfolio-image" src={taskManager} alt="Netflix Clone Project" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigNetflix} />
            <PopupboxContainer {...popupboxConfigCItyGuide} />
            <PopupboxContainer {...popupboxConfigPortfolio} />
            <PopupboxContainer {...popupboxConfigTaskManager} />
        </div>
    )
}

export default Portfolio
