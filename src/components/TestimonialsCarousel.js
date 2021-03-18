import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
//Avater imports
import avater1 from "../images/avatars/avatar-1.png";
import avater2 from "../images/avatars/avatar-2.png";
import avater3 from "../images/avatars/avatar-3.png";
import avater4 from "../images/avatars/avatar-4.png";


const TestimonialsCarousel = () => {
    return (
        <Carousel 
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000} >
            <>
                <img src={avater1} alt="John Doe 1" />
                <div className="myCarosel" >
                    <h3>John Doe 1</h3>
                    <p>Say something...</p>
                </div>
            </>
            <>
                <img src={avater2} alt="John Doe 2" />
                <div className="myCarosel" >
                    <h3>Jane Doe 2</h3>
                    <p>Say something...</p>
                </div>
            </>
            <>
                <img src={avater3} alt="John Doe 3" />
                <div className="myCarosel" >
                    <h3>John Doe 3</h3>
                    <p>Say something...</p>
                </div>
            </>
            <>
                <img src={avater4} alt="John Doe 4" />
                <div className="myCarosel" >
                    <h3>John Doe 4</h3>
                    <p>Say something...</p>
                </div>
            </>
        </Carousel>
    )
}

export default TestimonialsCarousel
