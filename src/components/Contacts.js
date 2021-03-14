import React, {useState} from 'react'
import emailjs from "emailjs-com";
import {useForm} from "react-hook-form";

const Contacts = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const {register, handleSubmit, errors } = useForm();

    const serviceID = "Gservice_123";
    const templateID = "template_jxk99lb";
    const userID = "user_yZVFzEzHvd8FltGT9Ey25";

    //input validation
    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID, {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description
            },
            userID
            )
            r.target.reset();
    }

    const sendEmail = (serviceID, templateID, variables, userID) => {
        emailjs.send(serviceID, templateID, variables, userID)
          .then(() => {
            setSuccessMessage("Form sent successfully! I'll contact you as soon as possible.");
          }).catch(err => console.error(`Something went wrong ${err}`) );
    }


    return (
        <div className="contacts">
            <div className="text-center">
                <h1>Contact me</h1>
                <p>Please fill out the form.</p>
                <span className="successMessage" >{successMessage}</span>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        {/* NAME INPUT */}
                        <div className="text-center">
                            <input 
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            name="name" 
                            ref={
                              register({
                                  required: "Please enter your name.",
                                  maxLength: {
                                      value: 20,
                                      message: "Please enter a name with fewer than 20 characters."
                                  }
                              })  
                            }
                            />
                            <div className="line" ></div>
                        </div>
                        <span className="error-message">
                            {errors.name && errors.name.message}
                        </span>
                        {/* PHONE INPUT */}
                        <div className="text-center">
                            <input 
                            type="text"
                            className="form-control"
                            placeholder="Phone Number"
                            name="phone"
                            ref={
                                register({
                                    required: "Please add your phone number."
                                })  
                              } 
                            />
                            <div className="line" ></div>
                        </div>
                        <span className="error-message">
                            {errors.phone && errors.phone.message}
                        </span>
                        {/* Email INPUT */}
                        <div className="text-center">
                            <input 
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            name="email" 
                            ref={
                                register({
                                    required: "Please provide your email.",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email"
                                    }
                                })  
                              } 
                            />
                            <div className="line" ></div>
                        </div>
                        <span className="error-message">
                            {errors.email && errors.email.message}
                        </span>
                        {/* SUBJECT INPUT */}
                        <div className="text-center">
                            <input 
                            type="text"
                            className="form-control"
                            placeholder="Subject"
                            name="subject" 
                            ref={
                                register({
                                    required: "OOPS, you forget to add the subject."
                                })  
                              } 
                            />
                            <div className="line" ></div>
                        </div>
                        <span className="error-message">
                            {errors.subject && errors.subject.message}
                        </span>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        {/* DESCRIPTION INPUT */}
                        <div className="text-center">
                            <textarea 
                            type="text"
                            className="form-control"
                            placeholder="Descriptions ..."
                            name="description" 
                            ref={
                                register({
                                    required: "Please describe shortly."
                                })  
                              }
                            ></textarea>
                            <div className="line" ></div>
                        </div>
                        <span className="error-message">
                            {errors.description && errors.description.message}
                        </span>
                        <button className="btn-main-offer contact-btn" type="submit">contact me</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Contacts
