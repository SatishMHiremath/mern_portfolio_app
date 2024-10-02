import React from 'react'
import './projects.css'
import ecompic from '../../assets/image/ecommerce.jpg'
import javastackpic from '../../assets/image/fullstack.png'
import apidesignpic from '../../assets/image/apidesign.jpg';
import Spin from "react-reveal/Spin";

const Projects = () => {
  return (
    <>
      <div className='container project' id='project'>
        <h2 className='col-11 mt-3 mb-1 text-center text-uppercase'>
            TOP RECENT PROJECTS
        </h2>
        <hr/>
        <p className='pb-3 text-center'>
            Here are my top 3 projects with live link and source code 
        </p>
        <div className='row' id='ads'>
            <Spin>
            <div className='col-md-3'>
                <div className='card rounded'>
                    <div className='card-image'>
                        <span className='card-notify-badge'>
                            MERN Full stack
                        </span>
                        <img src={ecompic} alt="project1" />
                    </div>
                    <div className='card-image-overlay m-auto mt-3'>
                        <span className='card-detail-badge'>MongoDB</span>
                        <span className='card-detail-badge'>ExpressJS</span>
                        <span className='card-detail-badge'>ReactJS</span>
                        <span className='card-detail-badge'>NodeJS</span>
                    </div>
                    <div className='card-body text-center'> 
                        <div className='ad-title m-auto'>
                            <h5 className='text-uppercase'>
                                Portfolio website
                            </h5>
                        </div>
                        <a className='ad-btn' href="#">View</a>
                    </div>
                </div>
            </div>
            <div className='col-md-3'>
                <div className='card rounded'>
                    <div className='card-image'>
                        <span className='card-notify-badge'>
                           Java Backend Development
                        </span>
                        <img src={apidesignpic} alt="project1" />
                    </div>
                    <div className='card-image-overlay m-auto mt-3'>
                        <span className='card-detail-badge'>Java Backend</span>
                        <span className='card-detail-badge'>Springboot / Rest Api</span>
                    </div>
                    <div className='card-body text-center'> 
                        <div className='ad-title m-auto'>
                            <h5 className='text-uppercase'>
                                API Design 
                            </h5>
                        </div>
                        <a className='ad-btn' href="https://github.com/SatishMHiremath/SpringBootH2Integration">View</a>
                    </div>
                </div>
            </div>
            <div className='col-md-3'>
                <div className='card rounded'>
                    <div className='card-image'>
                        <span className='card-notify-badge'>
                           Java Full stack App
                        </span>
                        <img src={javastackpic} alt="project1" />
                    </div>
                    <div className='card-image-overlay m-auto mt-3'>
                        <span className='card-detail-badge'>InMemoryDB</span>
                        <span className='card-detail-badge'>ReactJS</span>
                        <span className='card-detail-badge'>Springboot</span>
                    </div>
                    <div className='card-body text-center'> 
                        <div className='ad-title m-auto'>
                            <h5 className='text-uppercase'>
                                Full stack applciation
                            </h5>
                        </div>
                        <a className='ad-btn' href="https://github.com/SatishMHiremath/ReactSpringBoot/tree/master/ReactSpringBoot">View</a>
                    </div>
                </div>
            </div>
            </Spin>
        </div>
      </div>
    </>
  )
}

export default Projects