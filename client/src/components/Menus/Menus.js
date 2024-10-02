import React from 'react'
import './menu.css'
import profilePic from '../../assets/image/pic.jpeg';
// import profilePic from '../../assets/image/Aarohi.png';
import { Link } from "react-scroll";
import {FcAbout, FcBiotech, FcBusinessContact, FcHome, 
  FcPortraitMode, FcReadingEbook, FcVideoProjector} from 'react-icons/fc'
  import { motion } from 'framer-motion';

const Menus = ({toggle}) => {
  return (
    <>
      {
        toggle ? (
        <>
          <motion>
            <div className="navbar-profile-pic">
              <img src={profilePic} alt='profile_pic'/>
            </div>
          </motion>
          <motion left>          
          <div className='nav-items'>
            <div className='nav-item'>
              <div className='nav-link'>
                <Link to='home' spy={true} smooth={true} offset={-100} duration={100}>
                <FcHome/>
                Home
                </Link>
              </div>
              <div className='nav-link'>
                <Link to='about' spy={true} smooth={true} offset={-100} duration={100}>
                <FcAbout/> 
                About
                </Link>
              </div>
              <div className='nav-link'>
                <Link to='techstack' spy={true} smooth={true} offset={-100} duration={100}>
                <FcBiotech/>
                Tech Stack
                </Link> 
              </div>
              <div className='nav-link'>
                <Link to='project' spy={true} smooth={true} offset={-100} duration={100}>
                <FcVideoProjector/>
                Projects 
                </Link>
              </div>
              <div className='nav-link'>
                <Link to='education' spy={true} smooth={true} offset={-100} duration={100}>
                <FcReadingEbook/> 
                Education
                </Link>
              </div>
              <div className='nav-link'>
                <Link to='workexp' spy={true} smooth={true} offset={-100} duration={100}>
                <FcPortraitMode/> 
                Work
                </Link>
              </div>
              <div className='nav-link'>
                <Link to='contact' spy={true} smooth={true} offset={-100} duration={100}>
                <FcBusinessContact/>
                Contact 
                </Link>
              </div>
            </div>
          </div>
        </motion>        
        </>
      ) : (
        <>
        <div className="nav-items">
          <div className="nav-item">
            <div className="nav-link">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcHome />
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcAbout />
              </Link>
            </div>

            <div className="nav-link">
              <Link
                to="techstack"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcBiotech />
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="project"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcVideoProjector />
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="education"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcReadingEbook />
              </Link>
            </div>
            
            <div className="nav-link">
              <Link
                to="workexp"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcPortraitMode />
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcBusinessContact />
              </Link>
            </div>
          </div>
        </div>
      </>
      )
      }
    </>
  )
}

export default Menus