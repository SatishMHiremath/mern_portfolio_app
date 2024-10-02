import React from 'react';
import './techstack.css';
import { TechStackList } from '../../utils/TechStackList';
import RubberBand from "react-reveal/RubberBand";
import Fade from "react-reveal/Fade";

const TechStack = () => {
  return (
    <div className='container techstack' id='techstack'>
      <RubberBand>
        <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Technology Stack</h2>
        <hr />
        <p className='pb-3 text-center'>
          👉 Including programming languages, frameworks, databases,
          frontend and backend tools for API design
        </p>
      </RubberBand>

      <div className='row'>
        {TechStackList.map((tech) => (
          <Fade key={tech._id} left>
            <div className="col-md-2 col-sm-4 col-6 mb-4"> {/* Adjust columns for responsive grid */}
              <div className="card h-100"> {/* Use h-100 to make cards equal height */}
                <div className="card-content">
                  <div className="card-body">
                    <div className="media d-flex justify-content-center">
                      <div className="align-self-center">
                        <tech.icon className="tech-icon" />
                      </div>
                      <div className="media-body text-center"> {/* Center the text */}
                        <h5>{tech.name}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
