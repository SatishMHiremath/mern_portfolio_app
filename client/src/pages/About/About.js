import React from 'react';
import './about.css';
import profilePic from '../../assets/image/pic.jpeg';
import Jump from "react-reveal/Jump";
import { motion } from 'framer-motion';

const About = () => {
  return (
    <>
        <Jump>
            <div className='about' id='about'>
                <div className='row'>
                    <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img'>
                        <img src={profilePic} alt='profile_pic'/>
                    </div>
                    <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content'>
                        <h1>About Me</h1>
                            <p>
                                A competent professional with Proven skills in transforming business requirements into technical specifications.
                                I am an accomplishment-driven professional with 14 years of experience in optimizing application performance through code enhancements and innovative solutions.
                                Have been recognized for achieving improvement in application performance through building new distributed systems and strategic code optimization initiatives 
                                in the current role at NatWest Group.

                                Possess a strong foundation in Java 8, Spring Boot Microservices, Kafka, Rest API, distributed systems and OOPs Programming.
                                Resourceful in guiding projects from conceptualization to operational applications with React and Spring Boot, ensuring seamless system migrations in cloud technologies.

                                Expertise in leading the development of end-to-end applications, optimizing system performance, and implementing innovative solutions to drive operational efficiency.
                                Skilled in empowering teams through knowledge dissemination and mentorship, fostering excellence in Java development practices.
                            </p>    
                        </div>
                    </div>
            </div>
        </Jump>
    </>
  )
}

export default About