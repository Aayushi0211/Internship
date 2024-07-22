import React from "react";

export default function About() {
    return (
        <>
            <section className="resume-section" id="about">
                <div className="resume-section-content">
                    <h1 className="mb-0">
                        Aayushi
                        <span className="text-primary">Chaudhari</span>
                    </h1>
                    <div className="subheading mb-5">
                        <a href="mailto:name@email.com">aayushibchaudhari0211@email.com</a>
                    </div>
                    <p className="lead mb-5">
                        Hello there! I'm Aayushi Chaudhari, Computer Engineering student at SSBT COET Jalgaon. 
                        I have a solid foundation in web development and design, 
                        with proficiency in programming languages such as HTML, CSS, JavaScript, C. 
                        Always eager to explore various new opportunities!
                    </p>
                    <div className="social-icons">
                        <a className="social-icon" href="#!"><i className="fab fa-linkedin-in"></i></a>
                        <a className="social-icon" href="#!"><i className="fab fa-github"></i></a>
                    </div>
                </div>
            </section>
            <hr className="m-0" />
        </>
    )
}   
