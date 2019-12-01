import React from 'react';
import profile from './Components/NavBar/newprofilepic.jpg';

function About() {
    return(
        <div className="about-page">
            <div>
                <img width="300px" height="auto" src={profile} alt="" />
            </div>
            <div>
                <div>
                    <p>Written by:</p>
                    <p>Eugene Kim</p>
                    <p>ekim1707@gmail.com</p>
                    <p>www.eugenekimportfolio.com</p>
                    <p>www.linkedin.com/in/eugene-kim-1707</p>
                    <br/>
                    <p>HTML, CSS, JavaScript, Node, Express (Express-Generator), PostgreSQL, React (Create-React-App)</p>
                    <p>Axios, React-Router, Redux, React-Redux, Redux-Promise</p>
                    <p>Base64, React-Native-Base64, Bcrypt, DotENV, Helmet, PG-Promise, Rand-Token</p>
                    <p>Materialize, React-Multi-Carousel, SweetAlert2-React</p>
                </div>
            </div>
        </div>
    )
}

export default About;